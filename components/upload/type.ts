export interface ImageUploadPromptProps {
  prompt: string;
  onChange: (prompt: string) => void;
  submit: (prompt: string) => void;
}
