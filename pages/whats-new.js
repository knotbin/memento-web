export { default } from '@/components/pages/whats-new';

export async function getStaticProps() {
  const res = await fetch(
    'https://api.github.com/repos/knotbin/memento/releases'
  );
  const data = await res.json();

  return {
    props: {
      releases: data,
    },
  };
}
