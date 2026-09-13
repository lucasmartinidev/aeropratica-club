import DefaultLayout from "interface/DefaultLayout";

function Home() {
  return (
    <DefaultLayout
      metadata={{
        description:
          "Aeroprática Club | Sua próxima experiência de voo começa aqui.",
      }}
    >
      <h1>
        Aeroprática Club ✈️ Sua próxima experiência de voo começa aqui! 🚁{" "}
      </h1>
    </DefaultLayout>
  );
}

export default Home;
