import type { ComponentType } from 'react';

const samples = import.meta.glob('./samples/**/*.tsx', { eager: true }) as Record<string, { default: ComponentType }>;

export function App() {
  return (
    <main>
      {Object.entries(samples)
        .sort()
        .map(([path, mod]) => {
          const id = path.replace('./samples/', '').replace(/\.tsx$/, '');
          const Sample = mod.default;
          return (
            <section key={id} data-sample={id}>
              <h2>{id}</h2>
              <Sample />
            </section>
          );
        })}
    </main>
  );
}
