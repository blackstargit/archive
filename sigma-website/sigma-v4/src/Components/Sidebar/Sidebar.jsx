import Links from "./Links";
import Social from "./Social";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Links */}
      <Links />

      {/* social */}
      <Social />
    </div>
  );
}
