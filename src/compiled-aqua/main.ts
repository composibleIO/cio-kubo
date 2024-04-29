/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.5
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */
import type { IFluenceClient as IFluenceClient$$, ParticleContext as ParticleContext$$ } from '@fluencelabs/js-client';

// Making aliases to reduce chance of accidental name collision
import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$
} from '@fluencelabs/js-client';


// Functions
export const test2_script = `
(xor
 (new $b
  (new $cids
   (new $res
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (seq
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                        (par
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (seq
                               (seq
                                (new $option-inline
                                 (seq
                                  (seq
                                   (new %TestV0_obj_map
                                    (seq
                                     (seq
                                      (seq
                                       (seq
                                        (seq
                                         (seq
                                          (ap ("chainNetworkId" 31337) %TestV0_obj_map)
                                          (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %TestV0_obj_map)
                                         )
                                         (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %TestV0_obj_map)
                                        )
                                        (ap ("definition" "bafkreihvb4lhkje7iyqpb4ql5vm7bazb3pl4awapibhiikpjlqmnn7m73e") %TestV0_obj_map)
                                       )
                                       (ap ("matched" true) %TestV0_obj_map)
                                      )
                                      (ap ("timestamp" "2024-04-28T17:56:58.153Z") %TestV0_obj_map)
                                     )
                                     (canon %init_peer_id% %TestV0_obj_map  TestV0_obj)
                                    )
                                   )
                                   (xor
                                    (ap TestV0_obj $option-inline)
                                    (null)
                                   )
                                  )
                                  (canon %init_peer_id% $option-inline  #option-inline-0)
                                 )
                                )
                                (new %Deals_obj_map
                                 (seq
                                  (ap ("testV0" #option-inline-0) %Deals_obj_map)
                                  (canon %init_peer_id% %Deals_obj_map  Deals_obj)
                                 )
                                )
                               )
                               (ap Deals_obj.$.testV0 Deals_obj_flat)
                              )
                              (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
                             )
                             (xor
                              (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
                              (fail :error:)
                             )
                            )
                            (new -if-error-
                             (xor
                              (seq
                               (match ret.$.success false
                                (seq
                                 (new $array-inline
                                  (seq
                                   (seq
                                    (ap "Failed to resolve subnet: " $array-inline)
                                    (ap ret.$.error $array-inline)
                                   )
                                   (canon %init_peer_id% $array-inline  #array-inline-0)
                                  )
                                 )
                                 (call %init_peer_id% ("run-console" "print") [#array-inline-0])
                                )
                               )
                               (new $-hop-
                                (new #-hopc-
                                 (canon -relay- $-hop-  #-hopc-)
                                )
                               )
                              )
                              (seq
                               (seq
                                (ap :error: -if-error-)
                                (xor
                                 (seq
                                  (match :error:.$.error_code 10001
                                   (null)
                                  )
                                  (new $-hop-
                                   (new #-hopc-
                                    (canon -relay- $-hop-  #-hopc-)
                                   )
                                  )
                                 )
                                 (fail -if-error-)
                                )
                               )
                               (new $-hop-
                                (new #-hopc-
                                 (canon -relay- $-hop-  #-hopc-)
                                )
                               )
                              )
                             )
                            )
                           )
                           (ap ret.$.workers ret_flat)
                          )
                          (fold ret_flat w-0
                           (par
                            (xor
                             (seq
                              (seq
                               (seq
                                (seq
                                 (seq
                                  (seq
                                   (new $-hop-
                                    (new #-hopc-
                                     (canon -relay- $-hop-  #-hopc-)
                                    )
                                   )
                                   (new $-hop-
                                    (new #-hopc-
                                     (canon w-0.$.host_id $-hop-  #-hopc-)
                                    )
                                   )
                                  )
                                  (call w-0.$.worker_id.[0] ("cioKubo" "getRecursive") ["/dns4/ipfs/tcp/5001" "QmWvw4aXTWJJMMmxWA95wZrNPvugRfQMMrgkvbfkeuQnNS" "test"] ret-0)
                                 )
                                 (ap ret-0 $res)
                                )
                                (new $-hop-
                                 (new #-hopc-
                                  (canon w-0.$.host_id $-hop-  #-hopc-)
                                 )
                                )
                               )
                               (new $-hop-
                                (new #-hopc-
                                 (canon -relay- $-hop-  #-hopc-)
                                )
                               )
                              )
                              (new $-hop-
                               (new #-hopc-
                                (canon %init_peer_id% $-hop-  #-hopc-)
                               )
                              )
                             )
                             (seq
                              (seq
                               (seq
                                (new $-hop-
                                 (new #-hopc-
                                  (canon w-0.$.host_id $-hop-  #-hopc-)
                                 )
                                )
                                (new $-hop-
                                 (new #-hopc-
                                  (canon -relay- $-hop-  #-hopc-)
                                 )
                                )
                               )
                               (new $-hop-
                                (new #-hopc-
                                 (canon %init_peer_id% $-hop-  #-hopc-)
                                )
                               )
                              )
                              (fail :error:)
                             )
                            )
                            (next w-0)
                           )
                           (never)
                          )
                         )
                         (null)
                        )
                       )
                       (new $res_test
                        (seq
                         (seq
                          (fold $res res_fold_var
                           (seq
                            (seq
                             (ap res_fold_var $res_test)
                             (canon %init_peer_id% $res_test  #res_iter_canon)
                            )
                            (xor
                             (match #res_iter_canon.length 3
                              (null)
                             )
                             (next res_fold_var)
                            )
                           )
                           (never)
                          )
                          (canon %init_peer_id% $res_test  #res_result_canon)
                         )
                         (ap #res_result_canon res_gate)
                        )
                       )
                      )
                      (new $option-inline-1
                       (seq
                        (seq
                         (new %TestV0_obj-0_map
                          (seq
                           (seq
                            (seq
                             (seq
                              (seq
                               (seq
                                (ap ("chainNetworkId" 31337) %TestV0_obj-0_map)
                                (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %TestV0_obj-0_map)
                               )
                               (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %TestV0_obj-0_map)
                              )
                              (ap ("definition" "bafkreihvb4lhkje7iyqpb4ql5vm7bazb3pl4awapibhiikpjlqmnn7m73e") %TestV0_obj-0_map)
                             )
                             (ap ("matched" true) %TestV0_obj-0_map)
                            )
                            (ap ("timestamp" "2024-04-28T17:56:58.153Z") %TestV0_obj-0_map)
                           )
                           (canon %init_peer_id% %TestV0_obj-0_map  TestV0_obj-0)
                          )
                         )
                         (xor
                          (ap TestV0_obj-0 $option-inline-1)
                          (null)
                         )
                        )
                        (canon %init_peer_id% $option-inline-1  #option-inline-1-0)
                       )
                      )
                     )
                     (new %Deals_obj-0_map
                      (seq
                       (ap ("testV0" #option-inline-1-0) %Deals_obj-0_map)
                       (canon %init_peer_id% %Deals_obj-0_map  Deals_obj-0)
                      )
                     )
                    )
                    (ap Deals_obj-0.$.testV0 Deals_obj-0_flat)
                   )
                   (ap Deals_obj-0_flat.$.[0].dealIdOriginal Deals_obj-0_flat_flat)
                  )
                  (xor
                   (call -relay- ("subnet" "resolve") [Deals_obj-0_flat_flat] ret-1)
                   (fail :error:)
                  )
                 )
                 (new -if-error-
                  (xor
                   (seq
                    (match ret-1.$.success false
                     (seq
                      (new $array-inline-1
                       (seq
                        (seq
                         (ap "Failed to resolve subnet: " $array-inline-1)
                         (ap ret-1.$.error $array-inline-1)
                        )
                        (canon %init_peer_id% $array-inline-1  #array-inline-1-0)
                       )
                      )
                      (call %init_peer_id% ("run-console" "print") [#array-inline-1-0])
                     )
                    )
                    (new $-hop-
                     (new #-hopc-
                      (canon -relay- $-hop-  #-hopc-)
                     )
                    )
                   )
                   (seq
                    (seq
                     (ap :error: -if-error-)
                     (xor
                      (seq
                       (match :error:.$.error_code 10001
                        (null)
                       )
                       (new $-hop-
                        (new #-hopc-
                         (canon -relay- $-hop-  #-hopc-)
                        )
                       )
                      )
                      (fail -if-error-)
                     )
                    )
                    (new $-hop-
                     (new #-hopc-
                      (canon -relay- $-hop-  #-hopc-)
                     )
                    )
                   )
                  )
                 )
                )
                (ap ret-1.$.workers ret-1_flat)
               )
               (fold ret-1_flat w-1
                (seq
                 (xor
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (new $-hop-
                        (new #-hopc-
                         (canon -relay- $-hop-  #-hopc-)
                        )
                       )
                       (new $-hop-
                        (new #-hopc-
                         (canon w-1.$.host_id $-hop-  #-hopc-)
                        )
                       )
                      )
                      (call w-1.$.worker_id.[0] ("cioKubo" "addRecursive") ["/dns4/ipfs/tcp/5001" "test"] ret-2)
                     )
                     (ap ret-2 $cids)
                    )
                    (new $-hop-
                     (new #-hopc-
                      (canon w-1.$.host_id $-hop-  #-hopc-)
                     )
                    )
                   )
                   (new $-hop-
                    (new #-hopc-
                     (canon -relay- $-hop-  #-hopc-)
                    )
                   )
                  )
                  (seq
                   (seq
                    (seq
                     (new $-hop-
                      (new #-hopc-
                       (canon w-1.$.host_id $-hop-  #-hopc-)
                      )
                     )
                     (new $-hop-
                      (new #-hopc-
                       (canon -relay- $-hop-  #-hopc-)
                      )
                     )
                    )
                    (new $-hop-
                     (new #-hopc-
                      (canon %init_peer_id% $-hop-  #-hopc-)
                     )
                    )
                   )
                   (fail :error:)
                  )
                 )
                 (next w-1)
                )
                (null)
               )
              )
              (new $cids_test
               (seq
                (seq
                 (fold $cids cids_fold_var
                  (seq
                   (seq
                    (ap cids_fold_var $cids_test)
                    (canon %init_peer_id% $cids_test  #cids_iter_canon)
                   )
                   (xor
                    (match #cids_iter_canon.length 3
                     (null)
                    )
                    (next cids_fold_var)
                   )
                  )
                  (never)
                 )
                 (canon %init_peer_id% $cids_test  #cids_result_canon)
                )
                (ap #cids_result_canon cids_gate)
               )
              )
             )
             (canon %init_peer_id% $cids  #cids_canon)
            )
            (call %init_peer_id% ("run-console" "print") [#cids_canon])
           )
           (new $cids_test-0
            (seq
             (seq
              (fold $cids cids_fold_var-0
               (seq
                (seq
                 (ap cids_fold_var-0 $cids_test-0)
                 (canon %init_peer_id% $cids_test-0  #cids_iter_canon-0)
                )
                (xor
                 (match #cids_iter_canon-0.length 1
                  (null)
                 )
                 (next cids_fold_var-0)
                )
               )
               (never)
              )
              (canon %init_peer_id% $cids_test-0  #cids_result_canon-0)
             )
             (ap #cids_result_canon-0 cids_gate-0)
            )
           )
          )
          (new $cids_test-1
           (seq
            (seq
             (fold $cids cids_fold_var-1
              (seq
               (seq
                (ap cids_fold_var-1 $cids_test-1)
                (canon %init_peer_id% $cids_test-1  #cids_iter_canon-1)
               )
               (xor
                (match #cids_iter_canon-1.length 2
                 (null)
                )
                (next cids_fold_var-1)
               )
              )
              (never)
             )
             (canon %init_peer_id% $cids_test-1  #cids_result_canon-1)
            )
            (ap #cids_result_canon-1 cids_gate-1)
           )
          )
         )
         (xor
          (match cids_gate-0.$.[0] cids_gate-1.$.[1]
           (ap true eq)
          )
          (ap false eq)
         )
        )
        (xor
         (match eq false
          (ap eq and)
         )
         (seq
          (seq
           (seq
            (new $cids_test-2
             (seq
              (seq
               (fold $cids cids_fold_var-2
                (seq
                 (seq
                  (ap cids_fold_var-2 $cids_test-2)
                  (canon %init_peer_id% $cids_test-2  #cids_iter_canon-2)
                 )
                 (xor
                  (match #cids_iter_canon-2.length 1
                   (null)
                  )
                  (next cids_fold_var-2)
                 )
                )
                (never)
               )
               (canon %init_peer_id% $cids_test-2  #cids_result_canon-2)
              )
              (ap #cids_result_canon-2 cids_gate-2)
             )
            )
            (new $cids_test-3
             (seq
              (seq
               (fold $cids cids_fold_var-3
                (seq
                 (seq
                  (ap cids_fold_var-3 $cids_test-3)
                  (canon %init_peer_id% $cids_test-3  #cids_iter_canon-3)
                 )
                 (xor
                  (match #cids_iter_canon-3.length 3
                   (null)
                  )
                  (next cids_fold_var-3)
                 )
                )
                (never)
               )
               (canon %init_peer_id% $cids_test-3  #cids_result_canon-3)
              )
              (ap #cids_result_canon-3 cids_gate-3)
             )
            )
           )
           (xor
            (match cids_gate-2.$.[0] cids_gate-3.$.[2]
             (ap true eq-0)
            )
            (ap false eq-0)
           )
          )
          (ap eq-0 and)
         )
        )
       )
       (new -if-else-error-
        (new -else-error-
         (new -if-error-
          (xor
           (match and true
            (seq
             (new $cids_test-4
              (seq
               (seq
                (fold $cids cids_fold_var-4
                 (seq
                  (seq
                   (ap cids_fold_var-4 $cids_test-4)
                   (canon %init_peer_id% $cids_test-4  #cids_iter_canon-4)
                  )
                  (xor
                   (match #cids_iter_canon-4.length 1
                    (null)
                   )
                   (next cids_fold_var-4)
                  )
                 )
                 (never)
                )
                (canon %init_peer_id% $cids_test-4  #cids_result_canon-4)
               )
               (ap #cids_result_canon-4 cids_gate-4)
              )
             )
             (new -if-else-error-
              (new -else-error-
               (new -if-error-
                (xor
                 (match cids_gate-4.$.[0] "QmWvw4aXTWJJMMmxWA95wZrNPvugRfQMMrgkvbfkeuQnNS"
                  (seq
                   (call %init_peer_id% ("run-console" "print") ["test ran succesfully"])
                   (ap true $b)
                  )
                 )
                 (seq
                  (ap :error: -if-error-)
                  (xor
                   (match :error:.$.error_code 10001
                    (seq
                     (call %init_peer_id% ("run-console" "print") ["comparison ran awry"])
                     (ap false $b)
                    )
                   )
                   (seq
                    (seq
                     (ap :error: -else-error-)
                     (xor
                      (match :error:.$.error_code 10001
                       (ap -if-error- -if-else-error-)
                      )
                      (ap -else-error- -if-else-error-)
                     )
                    )
                    (fail -if-else-error-)
                   )
                  )
                 )
                )
               )
              )
             )
            )
           )
           (seq
            (ap :error: -if-error-)
            (xor
             (match :error:.$.error_code 10001
              (seq
               (call %init_peer_id% ("run-console" "print") ["peers returned different results"])
               (ap false $b)
              )
             )
             (seq
              (seq
               (ap :error: -else-error-)
               (xor
                (match :error:.$.error_code 10001
                 (ap -if-error- -if-else-error-)
                )
                (ap -else-error- -if-else-error-)
               )
              )
              (fail -if-else-error-)
             )
            )
           )
          )
         )
        )
       )
      )
      (new $b_test
       (seq
        (seq
         (fold $b b_fold_var
          (seq
           (seq
            (ap b_fold_var $b_test)
            (canon %init_peer_id% $b_test  #b_iter_canon)
           )
           (xor
            (match #b_iter_canon.length 1
             (null)
            )
            (next b_fold_var)
           )
          )
          (never)
         )
         (canon %init_peer_id% $b_test  #b_result_canon)
        )
        (ap #b_result_canon b_gate)
       )
      )
     )
     (call %init_peer_id% ("callbackSrv" "response") [b_gate.$.[0]])
    )
   )
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type Test2Params = [config?: {ttl?: number}] | [peer: IFluenceClient$$, config?: {ttl?: number}];

export type Test2Result = Promise<boolean>;

export function test2(...args: Test2Params): Test2Result {
    return callFunction$$(
        args,
        {
    "functionName": "test2",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        test2_script
    );
}

export const test_script = `
(xor
 (new $r
  (new $b
   (new $res
    (new $b-0
     (new $cids
      (new $b-1
       (seq
        (seq
         (seq
          (seq
           (seq
            (seq
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (seq
                               (seq
                                (seq
                                 (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                                 (par
                                  (seq
                                   (seq
                                    (seq
                                     (seq
                                      (seq
                                       (seq
                                        (seq
                                         (new $option-inline
                                          (seq
                                           (seq
                                            (new %TestV0_obj_map
                                             (seq
                                              (seq
                                               (seq
                                                (seq
                                                 (seq
                                                  (seq
                                                   (ap ("chainNetworkId" 31337) %TestV0_obj_map)
                                                   (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %TestV0_obj_map)
                                                  )
                                                  (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %TestV0_obj_map)
                                                 )
                                                 (ap ("definition" "bafkreihvb4lhkje7iyqpb4ql5vm7bazb3pl4awapibhiikpjlqmnn7m73e") %TestV0_obj_map)
                                                )
                                                (ap ("matched" true) %TestV0_obj_map)
                                               )
                                               (ap ("timestamp" "2024-04-28T17:56:58.153Z") %TestV0_obj_map)
                                              )
                                              (canon %init_peer_id% %TestV0_obj_map  TestV0_obj)
                                             )
                                            )
                                            (xor
                                             (ap TestV0_obj $option-inline)
                                             (null)
                                            )
                                           )
                                           (canon %init_peer_id% $option-inline  #option-inline-0)
                                          )
                                         )
                                         (new %Deals_obj_map
                                          (seq
                                           (ap ("testV0" #option-inline-0) %Deals_obj_map)
                                           (canon %init_peer_id% %Deals_obj_map  Deals_obj)
                                          )
                                         )
                                        )
                                        (ap Deals_obj.$.testV0 Deals_obj_flat)
                                       )
                                       (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
                                      )
                                      (xor
                                       (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
                                       (fail :error:)
                                      )
                                     )
                                     (new -if-error-
                                      (xor
                                       (seq
                                        (match ret.$.success false
                                         (seq
                                          (new $array-inline
                                           (seq
                                            (seq
                                             (ap "Failed to resolve subnet: " $array-inline)
                                             (ap ret.$.error $array-inline)
                                            )
                                            (canon %init_peer_id% $array-inline  #array-inline-0)
                                           )
                                          )
                                          (call %init_peer_id% ("run-console" "print") [#array-inline-0])
                                         )
                                        )
                                        (new $-hop-
                                         (new #-hopc-
                                          (canon -relay- $-hop-  #-hopc-)
                                         )
                                        )
                                       )
                                       (seq
                                        (seq
                                         (ap :error: -if-error-)
                                         (xor
                                          (seq
                                           (match :error:.$.error_code 10001
                                            (null)
                                           )
                                           (new $-hop-
                                            (new #-hopc-
                                             (canon -relay- $-hop-  #-hopc-)
                                            )
                                           )
                                          )
                                          (fail -if-error-)
                                         )
                                        )
                                        (new $-hop-
                                         (new #-hopc-
                                          (canon -relay- $-hop-  #-hopc-)
                                         )
                                        )
                                       )
                                      )
                                     )
                                    )
                                    (ap ret.$.workers ret_flat)
                                   )
                                   (fold ret_flat w-0
                                    (par
                                     (xor
                                      (seq
                                       (seq
                                        (seq
                                         (seq
                                          (seq
                                           (seq
                                            (new $-hop-
                                             (new #-hopc-
                                              (canon -relay- $-hop-  #-hopc-)
                                             )
                                            )
                                            (new $-hop-
                                             (new #-hopc-
                                              (canon w-0.$.host_id $-hop-  #-hopc-)
                                             )
                                            )
                                           )
                                           (call w-0.$.worker_id.[0] ("cioKubo" "add") ["/dns4/ipfs/tcp/5001" "hello trisolaris"] ret-0)
                                          )
                                          (ap ret-0 $cids)
                                         )
                                         (new $-hop-
                                          (new #-hopc-
                                           (canon w-0.$.host_id $-hop-  #-hopc-)
                                          )
                                         )
                                        )
                                        (new $-hop-
                                         (new #-hopc-
                                          (canon -relay- $-hop-  #-hopc-)
                                         )
                                        )
                                       )
                                       (new $-hop-
                                        (new #-hopc-
                                         (canon %init_peer_id% $-hop-  #-hopc-)
                                        )
                                       )
                                      )
                                      (seq
                                       (seq
                                        (seq
                                         (new $-hop-
                                          (new #-hopc-
                                           (canon w-0.$.host_id $-hop-  #-hopc-)
                                          )
                                         )
                                         (new $-hop-
                                          (new #-hopc-
                                           (canon -relay- $-hop-  #-hopc-)
                                          )
                                         )
                                        )
                                        (new $-hop-
                                         (new #-hopc-
                                          (canon %init_peer_id% $-hop-  #-hopc-)
                                         )
                                        )
                                       )
                                       (fail :error:)
                                      )
                                     )
                                     (next w-0)
                                    )
                                    (never)
                                   )
                                  )
                                  (null)
                                 )
                                )
                                (new $cids_test
                                 (seq
                                  (seq
                                   (fold $cids cids_fold_var
                                    (seq
                                     (seq
                                      (ap cids_fold_var $cids_test)
                                      (canon %init_peer_id% $cids_test  #cids_iter_canon)
                                     )
                                     (xor
                                      (match #cids_iter_canon.length 3
                                       (null)
                                      )
                                      (next cids_fold_var)
                                     )
                                    )
                                    (never)
                                   )
                                   (canon %init_peer_id% $cids_test  #cids_result_canon)
                                  )
                                  (ap #cids_result_canon cids_gate)
                                 )
                                )
                               )
                               (new $cids_test-0
                                (seq
                                 (seq
                                  (fold $cids cids_fold_var-0
                                   (seq
                                    (seq
                                     (ap cids_fold_var-0 $cids_test-0)
                                     (canon %init_peer_id% $cids_test-0  #cids_iter_canon-0)
                                    )
                                    (xor
                                     (match #cids_iter_canon-0.length 1
                                      (null)
                                     )
                                     (next cids_fold_var-0)
                                    )
                                   )
                                   (never)
                                  )
                                  (canon %init_peer_id% $cids_test-0  #cids_result_canon-0)
                                 )
                                 (ap #cids_result_canon-0 cids_gate-0)
                                )
                               )
                              )
                              (new $cids_test-1
                               (seq
                                (seq
                                 (fold $cids cids_fold_var-1
                                  (seq
                                   (seq
                                    (ap cids_fold_var-1 $cids_test-1)
                                    (canon %init_peer_id% $cids_test-1  #cids_iter_canon-1)
                                   )
                                   (xor
                                    (match #cids_iter_canon-1.length 2
                                     (null)
                                    )
                                    (next cids_fold_var-1)
                                   )
                                  )
                                  (never)
                                 )
                                 (canon %init_peer_id% $cids_test-1  #cids_result_canon-1)
                                )
                                (ap #cids_result_canon-1 cids_gate-1)
                               )
                              )
                             )
                             (xor
                              (match cids_gate-0.$.[0] cids_gate-1.$.[1]
                               (ap true eq)
                              )
                              (ap false eq)
                             )
                            )
                            (xor
                             (match eq false
                              (ap eq and)
                             )
                             (seq
                              (seq
                               (seq
                                (new $cids_test-2
                                 (seq
                                  (seq
                                   (fold $cids cids_fold_var-2
                                    (seq
                                     (seq
                                      (ap cids_fold_var-2 $cids_test-2)
                                      (canon %init_peer_id% $cids_test-2  #cids_iter_canon-2)
                                     )
                                     (xor
                                      (match #cids_iter_canon-2.length 1
                                       (null)
                                      )
                                      (next cids_fold_var-2)
                                     )
                                    )
                                    (never)
                                   )
                                   (canon %init_peer_id% $cids_test-2  #cids_result_canon-2)
                                  )
                                  (ap #cids_result_canon-2 cids_gate-2)
                                 )
                                )
                                (new $cids_test-3
                                 (seq
                                  (seq
                                   (fold $cids cids_fold_var-3
                                    (seq
                                     (seq
                                      (ap cids_fold_var-3 $cids_test-3)
                                      (canon %init_peer_id% $cids_test-3  #cids_iter_canon-3)
                                     )
                                     (xor
                                      (match #cids_iter_canon-3.length 3
                                       (null)
                                      )
                                      (next cids_fold_var-3)
                                     )
                                    )
                                    (never)
                                   )
                                   (canon %init_peer_id% $cids_test-3  #cids_result_canon-3)
                                  )
                                  (ap #cids_result_canon-3 cids_gate-3)
                                 )
                                )
                               )
                               (xor
                                (match cids_gate-2.$.[0] cids_gate-3.$.[2]
                                 (ap true eq-0)
                                )
                                (ap false eq-0)
                               )
                              )
                              (ap eq-0 and)
                             )
                            )
                           )
                           (new -if-else-error-
                            (new -else-error-
                             (new -if-error-
                              (xor
                               (match and true
                                (seq
                                 (new $cids_test-4
                                  (seq
                                   (seq
                                    (fold $cids cids_fold_var-4
                                     (seq
                                      (seq
                                       (ap cids_fold_var-4 $cids_test-4)
                                       (canon %init_peer_id% $cids_test-4  #cids_iter_canon-4)
                                      )
                                      (xor
                                       (match #cids_iter_canon-4.length 1
                                        (null)
                                       )
                                       (next cids_fold_var-4)
                                      )
                                     )
                                     (never)
                                    )
                                    (canon %init_peer_id% $cids_test-4  #cids_result_canon-4)
                                   )
                                   (ap #cids_result_canon-4 cids_gate-4)
                                  )
                                 )
                                 (new -if-else-error-
                                  (new -else-error-
                                   (new -if-error-
                                    (xor
                                     (match cids_gate-4.$.[0] "bafkreie2v7b5wwbukiwzli6yvli5asjldo73ipznmwve5x5db54rwql4de"
                                      (seq
                                       (call %init_peer_id% ("run-console" "print") ["test ran succesfully"])
                                       (ap true $b-0)
                                      )
                                     )
                                     (seq
                                      (ap :error: -if-error-)
                                      (xor
                                       (match :error:.$.error_code 10001
                                        (seq
                                         (call %init_peer_id% ("run-console" "print") ["comparison ran awry"])
                                         (ap false $b-0)
                                        )
                                       )
                                       (seq
                                        (seq
                                         (ap :error: -else-error-)
                                         (xor
                                          (match :error:.$.error_code 10001
                                           (ap -if-error- -if-else-error-)
                                          )
                                          (ap -else-error- -if-else-error-)
                                         )
                                        )
                                        (fail -if-else-error-)
                                       )
                                      )
                                     )
                                    )
                                   )
                                  )
                                 )
                                )
                               )
                               (seq
                                (ap :error: -if-error-)
                                (xor
                                 (match :error:.$.error_code 10001
                                  (seq
                                   (call %init_peer_id% ("run-console" "print") ["peers returned different results"])
                                   (ap false $b-0)
                                  )
                                 )
                                 (seq
                                  (seq
                                   (ap :error: -else-error-)
                                   (xor
                                    (match :error:.$.error_code 10001
                                     (ap -if-error- -if-else-error-)
                                    )
                                    (ap -else-error- -if-else-error-)
                                   )
                                  )
                                  (fail -if-else-error-)
                                 )
                                )
                               )
                              )
                             )
                            )
                           )
                          )
                          (new $b-0_test
                           (seq
                            (seq
                             (fold $b-0 b-0_fold_var
                              (seq
                               (seq
                                (ap b-0_fold_var $b-0_test)
                                (canon %init_peer_id% $b-0_test  #b-0_iter_canon)
                               )
                               (xor
                                (match #b-0_iter_canon.length 1
                                 (null)
                                )
                                (next b-0_fold_var)
                               )
                              )
                              (never)
                             )
                             (canon %init_peer_id% $b-0_test  #b-0_result_canon)
                            )
                            (ap #b-0_result_canon b-0_gate)
                           )
                          )
                         )
                         (ap b-0_gate.$.[0] $b)
                        )
                        (par
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (seq
                               (seq
                                (new $option-inline-1
                                 (seq
                                  (seq
                                   (new %TestV0_obj-0_map
                                    (seq
                                     (seq
                                      (seq
                                       (seq
                                        (seq
                                         (seq
                                          (ap ("chainNetworkId" 31337) %TestV0_obj-0_map)
                                          (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %TestV0_obj-0_map)
                                         )
                                         (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %TestV0_obj-0_map)
                                        )
                                        (ap ("definition" "bafkreihvb4lhkje7iyqpb4ql5vm7bazb3pl4awapibhiikpjlqmnn7m73e") %TestV0_obj-0_map)
                                       )
                                       (ap ("matched" true) %TestV0_obj-0_map)
                                      )
                                      (ap ("timestamp" "2024-04-28T17:56:58.153Z") %TestV0_obj-0_map)
                                     )
                                     (canon %init_peer_id% %TestV0_obj-0_map  TestV0_obj-0)
                                    )
                                   )
                                   (xor
                                    (ap TestV0_obj-0 $option-inline-1)
                                    (null)
                                   )
                                  )
                                  (canon %init_peer_id% $option-inline-1  #option-inline-1-0)
                                 )
                                )
                                (new %Deals_obj-0_map
                                 (seq
                                  (ap ("testV0" #option-inline-1-0) %Deals_obj-0_map)
                                  (canon %init_peer_id% %Deals_obj-0_map  Deals_obj-0)
                                 )
                                )
                               )
                               (ap Deals_obj-0.$.testV0 Deals_obj-0_flat)
                              )
                              (ap Deals_obj-0_flat.$.[0].dealIdOriginal Deals_obj-0_flat_flat)
                             )
                             (xor
                              (call -relay- ("subnet" "resolve") [Deals_obj-0_flat_flat] ret-1)
                              (fail :error:)
                             )
                            )
                            (new -if-error-
                             (xor
                              (seq
                               (match ret-1.$.success false
                                (seq
                                 (new $array-inline-1
                                  (seq
                                   (seq
                                    (ap "Failed to resolve subnet: " $array-inline-1)
                                    (ap ret-1.$.error $array-inline-1)
                                   )
                                   (canon %init_peer_id% $array-inline-1  #array-inline-1-0)
                                  )
                                 )
                                 (call %init_peer_id% ("run-console" "print") [#array-inline-1-0])
                                )
                               )
                               (new $-hop-
                                (new #-hopc-
                                 (canon -relay- $-hop-  #-hopc-)
                                )
                               )
                              )
                              (seq
                               (seq
                                (ap :error: -if-error-)
                                (xor
                                 (seq
                                  (match :error:.$.error_code 10001
                                   (null)
                                  )
                                  (new $-hop-
                                   (new #-hopc-
                                    (canon -relay- $-hop-  #-hopc-)
                                   )
                                  )
                                 )
                                 (fail -if-error-)
                                )
                               )
                               (new $-hop-
                                (new #-hopc-
                                 (canon -relay- $-hop-  #-hopc-)
                                )
                               )
                              )
                             )
                            )
                           )
                           (ap ret-1.$.workers ret-1_flat)
                          )
                          (fold ret-1_flat w-1
                           (par
                            (xor
                             (seq
                              (seq
                               (seq
                                (seq
                                 (seq
                                  (seq
                                   (new $-hop-
                                    (new #-hopc-
                                     (canon -relay- $-hop-  #-hopc-)
                                    )
                                   )
                                   (new $-hop-
                                    (new #-hopc-
                                     (canon w-1.$.host_id $-hop-  #-hopc-)
                                    )
                                   )
                                  )
                                  (call w-1.$.worker_id.[0] ("cioKubo" "get") ["/dns4/ipfs/tcp/5001" "bafkreie2v7b5wwbukiwzli6yvli5asjldo73ipznmwve5x5db54rwql4de"] ret-2)
                                 )
                                 (ap ret-2 $res)
                                )
                                (new $-hop-
                                 (new #-hopc-
                                  (canon w-1.$.host_id $-hop-  #-hopc-)
                                 )
                                )
                               )
                               (new $-hop-
                                (new #-hopc-
                                 (canon -relay- $-hop-  #-hopc-)
                                )
                               )
                              )
                              (new $-hop-
                               (new #-hopc-
                                (canon %init_peer_id% $-hop-  #-hopc-)
                               )
                              )
                             )
                             (seq
                              (seq
                               (seq
                                (new $-hop-
                                 (new #-hopc-
                                  (canon w-1.$.host_id $-hop-  #-hopc-)
                                 )
                                )
                                (new $-hop-
                                 (new #-hopc-
                                  (canon -relay- $-hop-  #-hopc-)
                                 )
                                )
                               )
                               (new $-hop-
                                (new #-hopc-
                                 (canon %init_peer_id% $-hop-  #-hopc-)
                                )
                               )
                              )
                              (fail :error:)
                             )
                            )
                            (next w-1)
                           )
                           (never)
                          )
                         )
                         (null)
                        )
                       )
                       (new $res_test
                        (seq
                         (seq
                          (fold $res res_fold_var
                           (seq
                            (seq
                             (ap res_fold_var $res_test)
                             (canon %init_peer_id% $res_test  #res_iter_canon)
                            )
                            (xor
                             (match #res_iter_canon.length 3
                              (null)
                             )
                             (next res_fold_var)
                            )
                           )
                           (never)
                          )
                          (canon %init_peer_id% $res_test  #res_result_canon)
                         )
                         (ap #res_result_canon res_gate)
                        )
                       )
                      )
                      (new $res_test-0
                       (seq
                        (seq
                         (fold $res res_fold_var-0
                          (seq
                           (seq
                            (ap res_fold_var-0 $res_test-0)
                            (canon %init_peer_id% $res_test-0  #res_iter_canon-0)
                           )
                           (xor
                            (match #res_iter_canon-0.length 1
                             (null)
                            )
                            (next res_fold_var-0)
                           )
                          )
                          (never)
                         )
                         (canon %init_peer_id% $res_test-0  #res_result_canon-0)
                        )
                        (ap #res_result_canon-0 res_gate-0)
                       )
                      )
                     )
                     (new $res_test-1
                      (seq
                       (seq
                        (fold $res res_fold_var-1
                         (seq
                          (seq
                           (ap res_fold_var-1 $res_test-1)
                           (canon %init_peer_id% $res_test-1  #res_iter_canon-1)
                          )
                          (xor
                           (match #res_iter_canon-1.length 2
                            (null)
                           )
                           (next res_fold_var-1)
                          )
                         )
                         (never)
                        )
                        (canon %init_peer_id% $res_test-1  #res_result_canon-1)
                       )
                       (ap #res_result_canon-1 res_gate-1)
                      )
                     )
                    )
                    (xor
                     (match res_gate-0.$.[0] res_gate-1.$.[1]
                      (ap true eq-1)
                     )
                     (ap false eq-1)
                    )
                   )
                   (xor
                    (match eq-1 false
                     (ap eq-1 and-0)
                    )
                    (seq
                     (seq
                      (seq
                       (new $res_test-2
                        (seq
                         (seq
                          (fold $res res_fold_var-2
                           (seq
                            (seq
                             (ap res_fold_var-2 $res_test-2)
                             (canon %init_peer_id% $res_test-2  #res_iter_canon-2)
                            )
                            (xor
                             (match #res_iter_canon-2.length 1
                              (null)
                             )
                             (next res_fold_var-2)
                            )
                           )
                           (never)
                          )
                          (canon %init_peer_id% $res_test-2  #res_result_canon-2)
                         )
                         (ap #res_result_canon-2 res_gate-2)
                        )
                       )
                       (new $res_test-3
                        (seq
                         (seq
                          (fold $res res_fold_var-3
                           (seq
                            (seq
                             (ap res_fold_var-3 $res_test-3)
                             (canon %init_peer_id% $res_test-3  #res_iter_canon-3)
                            )
                            (xor
                             (match #res_iter_canon-3.length 3
                              (null)
                             )
                             (next res_fold_var-3)
                            )
                           )
                           (never)
                          )
                          (canon %init_peer_id% $res_test-3  #res_result_canon-3)
                         )
                         (ap #res_result_canon-3 res_gate-3)
                        )
                       )
                      )
                      (xor
                       (match res_gate-2.$.[0] res_gate-3.$.[2]
                        (ap true eq-2)
                       )
                       (ap false eq-2)
                      )
                     )
                     (ap eq-2 and-0)
                    )
                   )
                  )
                  (new -if-else-error-
                   (new -else-error-
                    (new -if-error-
                     (xor
                      (match and-0 true
                       (seq
                        (new $res_test-4
                         (seq
                          (seq
                           (fold $res res_fold_var-4
                            (seq
                             (seq
                              (ap res_fold_var-4 $res_test-4)
                              (canon %init_peer_id% $res_test-4  #res_iter_canon-4)
                             )
                             (xor
                              (match #res_iter_canon-4.length 1
                               (null)
                              )
                              (next res_fold_var-4)
                             )
                            )
                            (never)
                           )
                           (canon %init_peer_id% $res_test-4  #res_result_canon-4)
                          )
                          (ap #res_result_canon-4 res_gate-4)
                         )
                        )
                        (new -if-else-error-
                         (new -else-error-
                          (new -if-error-
                           (xor
                            (match res_gate-4.$.[0] "hello trisolaris"
                             (seq
                              (call %init_peer_id% ("run-console" "print") ["test ran succesfully"])
                              (ap true $b-1)
                             )
                            )
                            (seq
                             (ap :error: -if-error-)
                             (xor
                              (match :error:.$.error_code 10001
                               (seq
                                (call %init_peer_id% ("run-console" "print") ["comparison ran awry"])
                                (ap false $b-1)
                               )
                              )
                              (seq
                               (seq
                                (ap :error: -else-error-)
                                (xor
                                 (match :error:.$.error_code 10001
                                  (ap -if-error- -if-else-error-)
                                 )
                                 (ap -else-error- -if-else-error-)
                                )
                               )
                               (fail -if-else-error-)
                              )
                             )
                            )
                           )
                          )
                         )
                        )
                       )
                      )
                      (seq
                       (ap :error: -if-error-)
                       (xor
                        (match :error:.$.error_code 10001
                         (seq
                          (call %init_peer_id% ("run-console" "print") ["peers returned different results"])
                          (ap false $b-1)
                         )
                        )
                        (seq
                         (seq
                          (ap :error: -else-error-)
                          (xor
                           (match :error:.$.error_code 10001
                            (ap -if-error- -if-else-error-)
                           )
                           (ap -else-error- -if-else-error-)
                          )
                         )
                         (fail -if-else-error-)
                        )
                       )
                      )
                     )
                    )
                   )
                  )
                 )
                 (new $b-1_test
                  (seq
                   (seq
                    (fold $b-1 b-1_fold_var
                     (seq
                      (seq
                       (ap b-1_fold_var $b-1_test)
                       (canon %init_peer_id% $b-1_test  #b-1_iter_canon)
                      )
                      (xor
                       (match #b-1_iter_canon.length 1
                        (null)
                       )
                       (next b-1_fold_var)
                      )
                     )
                     (never)
                    )
                    (canon %init_peer_id% $b-1_test  #b-1_result_canon)
                   )
                   (ap #b-1_result_canon b-1_gate)
                  )
                 )
                )
                (ap b-1_gate.$.[0] $b)
               )
               (canon %init_peer_id% $b  #b_canon)
              )
              (ap true $r)
             )
             (fold #b_canon b-2-0
              (seq
               (new -if-error-
                (xor
                 (match b-2-0 false
                  (ap false $r)
                 )
                 (seq
                  (ap :error: -if-error-)
                  (xor
                   (match :error:.$.error_code 10001
                    (null)
                   )
                   (fail -if-error-)
                  )
                 )
                )
               )
               (next b-2-0)
              )
              (null)
             )
            )
            (canon %init_peer_id% $r  #r_to_functor)
           )
           (ap #r_to_functor.length r_length)
          )
          (new $r_test
           (seq
            (seq
             (fold $r r_fold_var
              (seq
               (seq
                (ap r_fold_var $r_test)
                (canon %init_peer_id% $r_test  #r_iter_canon)
               )
               (xor
                (match #r_iter_canon.length r_length
                 (null)
                )
                (next r_fold_var)
               )
              )
              (never)
             )
             (canon %init_peer_id% $r_test  #r_result_canon)
            )
            (ap #r_result_canon r_gate)
           )
          )
         )
         (call %init_peer_id% ("math" "sub") [r_length 1] r_idx)
        )
        (call %init_peer_id% ("callbackSrv" "response") [r_gate.$.[r_idx]])
       )
      )
     )
    )
   )
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type TestParams = [config?: {ttl?: number}] | [peer: IFluenceClient$$, config?: {ttl?: number}];

export type TestResult = Promise<boolean>;

export function test(...args: TestParams): TestResult {
    return callFunction$$(
        args,
        {
    "functionName": "test",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        test_script
    );
}
