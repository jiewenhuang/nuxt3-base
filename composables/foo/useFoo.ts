// It will be available as useFoo() (camelCase of file name without extension)
export const useFoo = () => {
  return useState('foo', () => 'bar')
}
