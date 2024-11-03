import styles from "@/App.module.css";
import { Button } from "@/components/Button";

export function App() {
  return (
    <div>
      <h1 className={styles.title}>Hello, world!</h1>
      <Button />
    </div>
  );
}
