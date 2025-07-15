import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TierCardProps = {
  price: number;
  reward: string;
};

export function TierCard({ price, reward }: TierCardProps) {
  const isHighTier = price >= 250;
  return (
    <div className={`p-1 rounded-lg bg-gradient-to-br ${isHighTier ? 'from-yellow-400 to-orange-500' : 'from-purple-500 to-pink-600'} transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
      <Card className="bg-gray-900 h-full text-center border-none">
        <CardHeader>
          <CardTitle className={`text-4xl font-black bg-gradient-to-br ${isHighTier ? 'from-yellow-400 to-orange-500' : 'from-purple-500 to-pink-600'} text-transparent bg-clip-text`}>
            ${price}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 text-lg">{reward}</p>
        </CardContent>
      </Card>
    </div>
  );
}
