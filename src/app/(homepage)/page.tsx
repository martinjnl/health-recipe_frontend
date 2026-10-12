import { RecipeInput } from './_components/recipeinput'
import { Title } from "@/shared/components/title"

export default function Home() {
  return (
    <main>
        <div className="flex flex-col gap-2 items-center justify-center min-h-dvh w-full p-4">

            <Title title={"Recipe Optimizer."}></Title>
            <p className="text-2xl">
                Generate a new healthier cooking recipe similar to an online recipe of your choice
            </p>
            <RecipeInput placeholder="Enter recipe URL" className="py-5" />
            <div className="flex flex-col w-3xl gap-y-5">
              <p className="text-2xl">
                This tool uses AI to generate a new recipe with healthier ingredients and cooking
                methods. This is experimental work and may not always work. We provide this tool for
                testing purposes only.
              </p>
              <p className="text-2xl g">
                Currently, you can only use recipes from the Swedish cooking website <a href="https://www.ica.se/recept" className="underline">ica.se</a>,
                due limitations with web scraping and the reliance on available meta data (schema.org). You can read more about the
                project <a href="https://www.kth.se/profile/marjacob/page/machine-learning-for-healthy-lifestyle-habits" className="underline">here</a>.
              </p>
              <p>
                Provided by Martin Jacobsson, KTH. Copyright Martin Jacobsson and Simon Fridh.
              </p>
            </div>
        </div>
    </main>
  )
}
