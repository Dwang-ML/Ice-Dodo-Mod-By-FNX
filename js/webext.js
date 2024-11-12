

var webext = {
    worker_req: function(data) {
        return new Promise(async (resolve, reject) => {
            if (chrome.runtime == null) {
                console.log("no runtime, maybe due to localhost.");
                resolve(null);
                return;
            }
            
            const chrx_ids = [config.chrx_id, config.dev_chrx_id];
            console.log("chrx_ids", chrx_ids);

            for (const chrx_id of chrx_ids) {
                let resp = await webext.worker_one(chrx_id, data);
                if (resp != null) {
                    console.log("resp", resp);
                    resolve(resp);
                    return;
                }
            }
            resolve(null);
        });
    },
    worker_one: function(chrx_id, data) {
        return new Promise((resolve, reject) => {
            try {
                chrome.runtime.sendMessage(chrx_id, data, function(response) {
                    resolve(response);
                    return;
                });
            } catch (error) {
                console.log("Err", error);
                resolve(null);
            }
        });
    },
    ping_from_web: function() {
        if (deployment.is_oworld) {
            return;
        }

        return this.worker_req({code: "ping_from_web"});
    }
}