export * from '@aranghat/base';
export * from '@aranghat/components';
export * from '@aranghat/navigation';
export * from '@aranghat/modals';
export * from '@aranghat/widgets';
export * from '@aranghat/extended';
/** Registers every artui element (idempotent). Costs every tier's bundle; import per component instead when size matters. */
export declare function defineAll(): void;
