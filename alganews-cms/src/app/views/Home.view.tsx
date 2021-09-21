import usePageTitle from '../../core/hooks/usePageTitle';
import DefaultLayout from '../layouts/Default';

export default function Home() {
  usePageTitle('Home');
  return (
    <DefaultLayout>
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quibusdam quisquam reprehenderit suscipit et nemo! Animi, quas.
        Tempore nisi ducimus cum eos temporibus blanditiis eum fugit dignissimos mollitia? Placeat,
        doloribus quam.
      </p>
    </DefaultLayout>
  );
}
