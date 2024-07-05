import { Bot, CommandContext, Context, InlineKeyboard } from "grammy";

const botToken = process.env.BOT_TOKEN || "";
const appUrl =
  process.env.APP_URL || "https://michaelborde.github.io/walletbot-app";

main().catch(console.error);

async function main() {
  const bot = new Bot(botToken, {
    client: {
      environment: "test",
    },
  });
  bot.command("start", start);
  return bot.start();

  async function start(ctx: CommandContext<Context>) {
    console.log(
      `Start command received from ${JSON.stringify(
        ctx.from
      )} in ${JSON.stringify(ctx.chat)}`
    );
    const keyboard = new InlineKeyboard().webApp(
      "Open Wallet App",
      `${appUrl}#tgWebAppStartParam=debug`
    );
    return ctx.reply("Press button to open the app.", {
      reply_markup: keyboard,
    });
  }
}
