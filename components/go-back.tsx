"use client"
import { Button } from "@/components/ui/button";
import { ArrowLeft, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface GoBackButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  label?: string;
  showIcon?: boolean;
  customAction?: () => void;
}

export function GoBackButton({
  variant = "ghost",
  size = "default",
  className = "",
  label = "",
  showIcon = true,
  customAction
}: GoBackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (customAction) {
      customAction();
    } else {
      router.back();
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={`gap-2 ${className}`}
      onClick={handleClick}
    >
      {showIcon && <ArrowLeft className="h-4 w-4 " />}
      {label}
    </Button>
  );
}