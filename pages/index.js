import DefaultLayout from "interface/DefaultLayout";

function Home() {
  return (
    <DefaultLayout
      metadata={{
        description:
          "Aero Prática Club | Sua próxima experiência de voo começa aqui.",
      }}
    >
      <h1>
        Aero Prática Club ✈️ Sua próxima experiência de voo começa aqui! 🚁{" "}
      </h1>
    </DefaultLayout>
  );
}

export default Home;
