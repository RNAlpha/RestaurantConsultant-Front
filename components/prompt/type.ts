export interface PromptProps {
  prompt: string;
  onChange: (prompt: string) => void;
  submit: (prompt: string) => void;
  placeholder?: string;
}
