import Link from "next/link";

export default function JoinPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-black/60 rounded-xl p-8 backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-center mb-12">
            Join the Guild
          </h1>

          <div className="space-y-8">
            <ol className="list-decimal list-inside space-y-4 text-lg">
              <li>
                Donate and mint any badge from{" "}
                <a
                  href="https://ethismoney.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  ethismoney.xyz
                </a>
              </li>
              <li>
                Join the{" "}
                <Link href="/discord" className="text-primary hover:underline">
                  Discord
                </Link>
              </li>
              <li>Verify ownership of the badge.</li>
            </ol>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-lg text-gray-300">
                If you&apos;d like to volunteer without donating,{" "}
                <Link href="/discord" className="text-primary hover:underline">
                  join our Discord
                </Link>{" "}
                and let us know in the #introductions channel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
