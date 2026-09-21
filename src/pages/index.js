import DefaultLayout from "interface/DefaultLayout";

function Home() {
  return (
    <DefaultLayout
      metadata={{
        description:
          "Aeroprática Club | Sua próxima experiência de voo começa aqui.",
      }}
    >
      <h1> 🛩️ Aeroprática Club 🚁 </h1>
      <h3> 🛫 Sua próxima experiência de voo começa aqui! 🛬</h3>
    </DefaultLayout>
  );
}

export default Home;
