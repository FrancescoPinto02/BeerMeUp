import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      // Stile e formattazione
      'indent': ['error', 4], // Indentazione di 4 spazi
      'quotes': ['error', 'single'], // Usa virgolette singole
      'semi': ['error', 'always'], // Richiedi punti e virgola
      'no-mixed-spaces-and-tabs': 'error', // Non mescolare spazi e tabulazioni
      'prefer-const': 'error', // Usa const per variabili che non vengono riassegnate
      'no-var': 'error', // Evita l'uso di var, usa let o const

      // Errori e avvisi
      'no-console': 'warn', // Avvisa sull'uso di console.log
      'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }], // Avviso per variabili non utilizzate
      'no-undef': 'error', // Errori per variabili non definite
      'consistent-return': 'error', // Richiedi un ritorno coerente dalle funzioni

      // Comportamento delle funzioni
      'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }], // Usa funzioni dichiarate, consenti arrow functions
      'arrow-parens': ['error', 'as-needed'], // Parentesi attorno alle arrow functions solo se necessario

      // Gestione degli spazi
      'space-before-function-paren': ['error', 'never'], // Nessuno spazio prima delle parentesi delle funzioni
      'space-in-parens': ['error', 'never'], // Nessuno spazio all'interno delle parentesi

      // Controllo delle condizioni
      'eqeqeq': ['error', 'always'], // Richiedi l'uso di === invece di ==
      'no-empty': 'error', // Non consentire blocchi vuoti
    }
  }
];
