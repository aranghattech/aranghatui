import { Bubble } from '@aranghat/components-react';

export default function Reactions() {
  return (
    <>
      <Bubble variant="muted" reactionsSide="bottom" reactionsAlign="start"><span>Reactions at the bottom start.</span><span slot="reactions" role="img" aria-label="heart and fire">❤️ 🔥</span></Bubble>
      <Bubble align="end" reactionsSide="top" reactionsAlign="end"><span>Reactions at the top end.</span><span slot="reactions" role="img" aria-label="3 laughing">😂 3</span></Bubble>
    </>
  );
}
