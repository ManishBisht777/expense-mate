import React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Input } from "./input";

interface MultiSelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const MultiSelect = React.forwardRef<HTMLInputElement, MultiSelectProps>(
  (props, ref) => {
    const { placeholder, tags, setTags, className } = props;

    const [inputValue, setInputValue] = React.useState("");
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" || e.key === ",") {
        e.preventDefault();
        const newTag = inputValue.trim();
        if (newTag && !tags.includes(newTag)) {
          setTags([...tags, newTag]);
        }
        setInputValue("");
      }
    };

    const removeTag = (tagToRemove: string) => {
      setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    return (
      <div>
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={className}
        />
        <div
          className={`flex flex-wrap gap-2 rounded-md mt-4 ${
            tags.length !== 0 && "mb-3"
          }`}
        >
          {tags.map((tag, index) => (
            <span
              key={index}
              className="transition-all border bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex h-8 items-center text-sm pl-2 rounded-md"
            >
              {tag}
              <Button
                type="button"
                variant="ghost"
                onClick={() => removeTag(tag)}
                className={cn("py-1 px-3 h-full hover:bg-transparent")}
              >
                <X size={14} />
              </Button>
            </span>
          ))}
        </div>
      </div>
    );
  }
);

MultiSelect.displayName = "MultiSelect";

export { MultiSelect };
