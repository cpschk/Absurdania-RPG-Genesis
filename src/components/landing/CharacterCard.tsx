import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CharacterCardProps = {
  icon: string;
  name: string;
};

export function CharacterCard({ icon, name }: CharacterCardProps) {
  return (
    <Card className="bg-gray-900/50 border-purple-500/20 text-center transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
      <CardHeader>
        <div className="text-6xl mx-auto mb-4">{icon}</div>
        <CardTitle className="text-lg font-bold text-white">{name}</CardTitle>
      </CardHeader>
    </Card>
  );
}
