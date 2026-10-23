// Illustration of an app: a simplified screen in each project's colors.
// Not real screenshots; sketches that stand for the kind of product.

type Props = {
  accent: string;
  background: string;
  text: string;
  kind: "dashboard" | "mobile";
};

export function Mockup({ accent, background, text, kind }: Props) {
  const mobile = kind === "mobile";
  return (
    <div
      aria-hidden="true"
      className={`mock-screen mx-auto flex flex-col overflow-hidden rounded-2xl shadow-xl shadow-black/30 ${
        mobile ? "h-56 w-32" : "h-56 w-full"
      }`}
      style={{ background, color: text }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-current opacity-30" />
        <span className="h-2 w-2 rounded-full bg-current opacity-30" />
        <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
      </div>
      <div className={`flex flex-1 gap-2 px-3 pb-3 ${mobile ? "flex-col" : ""}`}>
        {mobile ? (
          <>
            <div className="h-6 rounded-md" style={{ background: accent }} />
            <div className="h-10 rounded-md bg-current opacity-10" />
            <div className="h-10 rounded-md bg-current opacity-10" />
            <div className="mt-auto h-5 rounded-full" style={{ background: accent, opacity: 0.8 }} />
          </>
        ) : (
          <>
            <div className="flex w-1/4 flex-col gap-2">
              <div className="h-3 w-full rounded bg-current opacity-30" />
              <div className="h-3 w-4/5 rounded bg-current opacity-20" />
              <div className="h-3 w-full rounded" style={{ background: accent }} />
              <div className="h-3 w-3/5 rounded bg-current opacity-20" />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="grid grid-cols-3 gap-2">
                <div className="h-10 rounded-md bg-current opacity-10" />
                <div className="h-10 rounded-md" style={{ background: accent, opacity: 0.85 }} />
                <div className="h-10 rounded-md bg-current opacity-10" />
              </div>
              <div className="flex flex-1 items-end gap-1.5 rounded-md bg-current/5 p-2">
                {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="w-full rounded-sm"
                    style={{ height: `${h}%`, background: accent, opacity: 0.4 + (i % 3) * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
