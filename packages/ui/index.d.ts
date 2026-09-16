export * from '@aranghat/base';
export * from '@aranghat/components';
export * from '@aranghat/navigation';
export * from '@aranghat/modals';
export * from '@aranghat/widgets';
/** Registers every artui element (idempotent). Costs every tier's bundle; import per component instead when size matters. */
export declare function defineAll(): void;
