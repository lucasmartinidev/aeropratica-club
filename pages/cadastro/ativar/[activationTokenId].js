import { Banner } from "@primer/react";
import DefaultLayout from "interface/DefaultLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ActivateUserPage() {
  const router = useRouter();
  const { activationTokenId } = router.query;

  const [isActivating, setIsActivating] = useState(false);

  useEffect(() => {
    if (!activationTokenId) {
      return;
    }

    sendActivationRequest();

    async function sendActivationRequest() {
      try {
        const response = await fetch(
          `/api/v1/activations/${activationTokenId}`,
          {
            method: "PATCH",
            signal: AbortSignal.timeout(5000),
          },
        );

        const activationResponseBody = await response.json();
        if (response.status === 200) {
          // sinal de sucesso para o usuário, talvez um toast ou algo do tipo
          console.log("Sucesso: ", activationResponseBody);
          return;
        }
        // sinal de falha para o usuário, talvez um toast ou algo do tipo
        console.log("Falha: ", activationResponseBody);
      } catch (error) {
        // sinal de falha para o usuário, talvez um toast ou algo do tipo
        if (error.name === "TimeoutError") {
          console.error("O servidor demorou para responder");
        } else {
          console.error("Erro ao fazer a requisição: ", error);
        }
      }
    }
  }, [activationTokenId]);

  return (
    <DefaultLayout
      contentWidth="small"
      metadata={{
        title: "Ative sua conta",
      }}
    >
      <Banner
        variant="critical"
        title="Erro ao ativar a conta"
        description="O servidor demorou para responder"
      />
      <Banner
        variant="success"
        title="Conta ativada com sucesso"
        description="Tente fazer login com seu e-mail e senha."
        primaryAction={<Banner.PrimaryAction href="/login">Login</Banner.PrimaryAction>}
      />
    </DefaultLayout>
  );
}
