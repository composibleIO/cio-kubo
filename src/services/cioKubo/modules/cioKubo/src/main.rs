#![allow(non_snake_case)]

use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::WasmLoggerBuilder;
use cio_ipfs_effector_imports as ipfs;
use std::fs;
use std::path::PathBuf;
use cio_response_types::AMResponse;
use chrono::{Utc};

module_manifest!();

pub fn main() {

    WasmLoggerBuilder::new()
    // with_log_level can be skipped,
    // logger will be initialized with Info level in this case.
    .with_log_level(log::LevelFilter::Info)
    .build()
    .unwrap();
}


#[marine]
pub fn get(ipfs_api: String, cid: String) -> String {

    // log::info!("kanarie KUBO DAN!");

    let path = vault_path("kubo_tmp");
    let result = ipfs::get(ipfs_api, cid, &path);
    if result.success {
        match std::fs::read_to_string(&path) {
            Ok(result) => result,
            Err(err) => err.to_string()
        }
    } else {
        result.error
    }
}

// #[marine]
// pub fn dag_get(ipfs_api: String, cid: String) -> String {

//     println!("kukelekuu 1");
//     let path = vault_path("kubo_tmp");
//     let result = ipfs::dag_get(ipfs_api, cid, &path);

//     println!("kukelekuu {:?}", result);

//     if result.success {
//         match std::fs::read_to_string(&path) {
//             Ok(result) => result,
//             Err(err) => err.to_string()
//         }
//     } else {
//         result.error
//     }
// }


#[marine]
pub fn getRecursive(ipfs_api: String, cid: String, path_: String) -> String {
    let path = vault_path(&path_);
    let result = ipfs::get(ipfs_api, cid, &path);
    if result.success {  
        "ok".to_string()    
    } else {
        result.error
    }
}


#[marine]
pub fn add(ipfs_api: String, content: String) -> String {
    let path = vault_path("kubo_tmp");
    let _ = fs::write(PathBuf::from(path.clone()), content);
    let result = ipfs::add(ipfs_api, path);
    if result.success {
        result.hash
    } else {
        result.error
    }
}

#[marine]
pub fn addRecursive(ipfs_api: String, path_: String) -> String {
    let path = vault_path(&path_);
    let result = ipfs::add(ipfs_api, path);
    if result.success {
        result.hash
    } else {    
        result.error
    }
}

// #[marine]
// pub fn dag_put(ipfs_api: String, content: String) -> String {
//     let path = vault_path("kubo_tmp");
//     let _ = fs::write(PathBuf::from(path.clone()), content);
//     let result = ipfs::dag_put(ipfs_api, path);
//     if result.success {
//         result.hash
//     } else {
//         result.error
//     }
// }

#[marine]
pub fn hash(ipfs_api: String, path_: String) -> AMResponse {
    let path = vault_path(&path_);
    let result = ipfs::hash(ipfs_api, path);

    let cp = marine_rs_sdk::get_call_parameters();
    let timestamp = Utc::now().timestamp_millis();

    if result.success {

        return AMResponse {
            success: true,
            result: result.hash.clone(),
            result_raw: result.hash,
            timestamp,
            host_id: cp.host_id
        }  

    } else {   
        
        return AMResponse {
            success: false,
            result_raw: String::from(""),
            result: result.error,
            timestamp,
            host_id: cp.host_id
        }  
    }
}

// Since all effectors are working via the Particle Vault, you need to provide a correct path to the vault.
// At the moment, we don't have any nice library for this sort of things, so you need to do it manually.
//
// Here we need to create a path to the vault which has a form of `/tmp/vault/{particle-id}-{particle-token}`.
// In this directory, you can freely write and read any files you need. Note that this directory exists only when
// a particle that called the function exists, so you'll see here a different path each run.
fn vault_path(filename: &str) -> String {
    let cp = marine_rs_sdk::get_call_parameters();
    format!("/tmp/vault/{}-{}/{}", cp.particle.id, cp.particle.token, filename)
}

// fn vault() -> String {
//     let cp = marine_rs_sdk::get_call_parameters();
//     format!("/tmp/vault/{}-{}", cp.particle.id, cp.particle.token)
// }
