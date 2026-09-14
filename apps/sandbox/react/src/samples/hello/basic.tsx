import { Hello } from '@aranghat/base-react';

export default function Basic() {
  return <Hello name="artui" onGreet={(e) => console.log('greet', e.detail)} />;
}
