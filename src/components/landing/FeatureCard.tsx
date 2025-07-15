import { Card, CardContent } from "@/components/ui/card";

type FeatureCardProps = {
  icon: string;
  title: string;
};

export function FeatureCard({ icon, title }: FeatureCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 p-6 text-center transition-transform transform hover:scale-105 hover:bg-gray-700/50">
      <div className="text-5xl mb-4">{icon}</div>
      <p className="font-semibold text-white text-md">{title}</p>
    </Card>
  );
}
