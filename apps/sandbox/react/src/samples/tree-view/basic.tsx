import { TreeItem, TreeView } from '@aranghat/navigation-react';

export default function Basic() {
  return (
    <>
      <TreeView label="Files" value="button">
        <TreeItem value="src" label="src" expanded>
          <TreeItem value="components" label="components" expanded>
            <TreeItem value="button" label="button.tsx" />
            <TreeItem value="input" label="input.tsx" />
          </TreeItem>
          <TreeItem value="lib" label="lib">
            <TreeItem value="utils" label="utils.ts" />
          </TreeItem>
          <TreeItem value="index" label="index.ts" />
        </TreeItem>
        <TreeItem value="package" label="package.json" />
        <TreeItem value="readme" label="README.md" disabled />
      </TreeView>
    </>
  );
}
