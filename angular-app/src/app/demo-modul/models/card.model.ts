export type CardType = 'pik' | 'karo' | 'herz' | 'kreuz';

export const cardSymbols: Record<CardType, string> = {
    pik: '♠',
    karo: '♦',
    herz: '♥',
    kreuz: '♣',
} as const;
