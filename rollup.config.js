import 'prismjs'
import 'prism-svelte'
import './prism/svx.js'

import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import css from 'rollup-plugin-css-only'
import json from 'rollup-plugin-json'
import globals from 'rollup-plugin-node-globals'
import builtins from 'rollup-plugin-node-builtins'
import pkg from './package.json'

import sveltePreprocess from 'svelte-preprocess'
import typescript from '@rollup/plugin-typescript'

import slug from 'rehype-slug'
import link from 'rehype-autolink-headings'
import sanitize from 'rehype-sanitize'

import rust from "@wasm-tool/rollup-plugin-rust"; // for uwu wasm

// import { highlight, highlighter } from './prism/prism.js'

import { extname } from 'path'

import { mdsvex } from 'mdsvex'

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase())

const production = !process.env.ROLLUP_WATCH

function mdsvex_transform () {
  return {
    async transform (code, id) {
      if (extname(id) !== '.svtext') return

      const c = (
        await mdsvex({
          highlight: {
            // highlighter,
            alias: {
              ts: 'typescript',
              mdx: 'markdown',
              svelte: 'svelte',
              svx: 'svx',
              mdsvex: 'svx',
              sig: 'ts'
            }
          },
          extension: '.svtext',
          rehypePlugins: [slug, link, sanitize]
        }).markup({ content: code, filename: id })
      ).code
      return `export default \`${c.replace(/`/g, '\\`').trim()}\`;`
    }
  }
}

const onwarn = ({ message }) =>
  message.includes('@rollup/plugin-typescript TS2315')

function serve () {
  let server

  function toExit () {
    if (server) server.kill(0)
  }

  return {
    writeBundle () {
      if (server) return
      server = require('child_process').spawn(
        'npm',
        ['run', 'start', '--', '--dev'],
        {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        }
      )

      process.on('SIGTERM', toExit)
      process.on('exit', toExit)
    }
  }
}

export default [
  {
    input: 'src/main.ts',
    output: {
      sourcemap: true,
      format: 'iife',
      name: 'app',
      file: 'public/build/bundle.js',
      inlineDynamicImports: true
    },
    plugins: [
      mdsvex_transform(),
      json(),
      svelte({
        extensions: ['.svelte', '.svx'],
        preprocess: [
          mdsvex({ extension: '.svx' }),
          sveltePreprocess()
        ]
      }),
      css({ output: 'bundle.css' }),

      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      commonjs(),
      globals(),
      builtins(),
      typescript(),
      !production && serve(),
      !production && livereload('public'),
      production && terser()
    ],
    watch: {
      clearScreen: false
    },
    onwarn
  },
  // Optional rollup for just the component (not the app)
  {
    input: 'src/index.js',
    output: [{
      sourcemap: true,
      format: 'es',
      dir: pkg.module
    },
    {
      sourcemap: true,
      format: 'umd',
      name,
      file: pkg.main,
      inlineDynamicImports: true
    }],
    plugins: [
      mdsvex_transform(),
      json(),
      svelte({
        extensions: ['.svelte', '.svx'],
        preprocess: [
          mdsvex({ extension: '.svx' }),
          sveltePreprocess()
        ]
      }),
      css({ output: 'bundle.css' }),

      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      commonjs(),
      globals(),
      builtins(),
      typescript(),
      terser()
    ],
    watch: {
      clearScreen: false
    },
    onwarn
  },
  {
    input: 'src/worker.ts',
    output: {
      sourcemap: true,
      format: 'esm',
      name: 'app',
      file: 'public/worker.js',
      plugins: [
        // terser()
      ]
    },
    plugins: [
      rust({
        inlineWasm: true // include in worker
      }),
      json(),
      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      commonjs(),
      globals(),
      builtins(),
      typescript()
      // terser()
    ],
    watch: {
      clearScreen: false
    },
    onwarn
  }
]
