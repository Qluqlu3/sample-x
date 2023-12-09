import stylex from '@stylexjs/stylex';

const style = stylex.create({
  main: {
    backgroundColor: '#aaa',
  },
  box: {
    width: 800,
    height: 300,
    border: 'solid 1px #000',
    backgroundColor: '#006eff6e',
  },
});

export default function Home() {
  return (
    <main className={stylex(style.main)}>
      <div className={stylex(style.box)}></div>
    </main>
  );
}
