import { Blockfrost, Lucid, LucidEvolution } from "@lucid-evolution/lucid";
import { getLucidEvolutionNetwork, getNetwork } from "../blockfrost";

const getLucidEvolution = async (
  blockfrostApiKey: string
): Promise<LucidEvolution> => {
  const network = getNetwork(blockfrostApiKey);
  return await Lucid(
    new Blockfrost(
      `https://cardano-${network}.blockfrost.io/api/v0`,
      blockfrostApiKey
    ),
    getLucidEvolutionNetwork(blockfrostApiKey)
  );
};

export { getLucidEvolution };
