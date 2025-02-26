export const Categories = [
  'ansible',
  'batect',
  'bazel',
  'c',
  'cd',
  'ci',
  'custom',
  'dart',
  'docker',
  'dotnet',
  'elixir',
  'golang',
  'haskell',
  'helm',
  'iac',
  'java',
  'js',
  'kubernetes',
  'node',
  'perl',
  'php',
  'python',
  'ruby',
  'rust',
  'swift',
  'terraform',
] as const;

export type Category = (typeof Categories)[number];
