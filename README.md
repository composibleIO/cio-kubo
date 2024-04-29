
This is a [fluence](http://fluence.dev) project to share and demonstrate the cioKubo service, which is based on the [cio-ipfs-effector](https://github.com/composibleIO/cio-curl-effector), that in turn based is a fork from fluencelabs' official [ipfs-effector](https://github.com/fluencelabs/ipfs-effector). 

Methods have been added to get and put recursive file structures, as well as a method to get the CIDV1 without storing data. 

``` 
service CioKubo("cioKubo"):
  add(ipfs_api: string, content: string) -> string
  addRecursive(ipfs_api: string, path_: string) -> string
  get(ipfs_api: string, cid: string) -> string
  getRecursive(ipfs_api: string, cid: string, path_: string) -> string
  hash(ipfs_api: string, path_: string) -> string
```

to run: 

```
fluence local up
fluence deploy
fluence run -f 'test()'
```

For a usage example see [the aqua code](src/aqua.main.aqua) for that test. 

To use in a project clone this repository in a seperate folder and then symlink 

```
ln -s  <relpathToFolder>/cioKubo/src/services/cioKubo src/services/cioKubo
```