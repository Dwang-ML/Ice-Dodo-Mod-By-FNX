

var deployment = {
    is_chrome_ext: null,
    is_oworld: null,
    is_localhost: null,
    is_dev: null,
    init: function() {
        this.is_chrome_ext = this.check_is_chrome_ext();
        this.is_oworld = this.check_is_oworld();
        this.is_localhost = window.location.hostname == "localhost";
        this.is_dev = this.check_is_dev();
    },
    check_is_chrome_ext: function() {
        // firefox / I.E. / etc...
        if (window.chrome == null) {
            return false;
        }
        if (window.chrome.extension == null) {
            return false;
        }
        return true;
    },
    check_is_oworld: function() {
        if (window.is_oworld == true) {
            return true;
        }
        return false;
    },
    check_is_dev: function() {
        if (this.is_chrome_ext == false) {
            return false;
        }
        if (chrome.runtime.id == config.chrx_id) {
            return false;
        }
        return true;
    }
}