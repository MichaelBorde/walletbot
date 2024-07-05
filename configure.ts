import { Bot } from "grammy";

main().catch(console.error);

async function main() {
  const bot = new Bot(process.env.BOT_TOKEN || "", {
    client: {
      environment: "test",
    },
  });
  await bot.api.deleteMyCommands();
  await bot.api.setMyCommands([
    { command: "start", description: "Launch the wallet app" },
  ]);
  await bot.api.setMyName("MikeWalletbot");
  await bot.api.setMyDescription("Wallet bot");
  await bot.api.setMyShortDescription("This is the wallet bot");
}
