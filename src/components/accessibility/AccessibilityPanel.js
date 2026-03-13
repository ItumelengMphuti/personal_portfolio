import ThemeToggle from "./ThemeToggle";
import FontSizeControls from "./FontSizeControls";
import TextToSpeech from "./TextToSpeech";

function AccessibilityPanel() {
  return (
    <div className="container my-4 p-3 border rounded">
      <h3>Accessibility</h3>

      <ThemeToggle />
      <FontSizeControls />
      <TextToSpeech />
    </div>
  );
}

export default AccessibilityPanel;