
a marine wrapper around the ipfs-effector, plus two methods to inspect the particle vault.

```
service CioKubo("cioKubo"):
  add(ipfs_api: string, content: string) -> string
  addFolders(ipfs_api: string, path_: string) -> string
  get(ipfs_api: string, cid: string) -> string
  getFolders(ipfs_api: string, cid: string, path_: string) -> string
  inspectParticleVault() -> []string
  inspectParticleVaultFolder(path: string) -> []string
```