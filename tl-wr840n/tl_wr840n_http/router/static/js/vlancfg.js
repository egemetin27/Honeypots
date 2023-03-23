var noIptvData = {
    workingMode: "automatic",
    displayName: m_str.none,
    vlanSetting: {
        internet: {
            enable: true,
            vlanID: 2,
            priority: 0,
            extendID: 0,
            untag: 1,
            show: false,
            lanPort: 255,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanTagEditEnable: false
        },
        ipphone: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        iptv: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        tagbridge: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true
        },
        multicast: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanEnableEditEnable: false
        }
    },
    lan_mode: ["internet", "internet", "internet", "internet"],
    lan_edit: [false, false, false, false]
};
var default_mode_data = new Array({
    workingMode: "exstream",
    displayName: n_str.ethIptv.t_stream_mode,
    vlanSetting: {
        internet: {
            enable: true,
            vlanID: 10,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanTagEditEnable: false
        },
        ipphone: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        iptv: {
            enable: true,
            vlanID: 20,
            priority: 4,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        tagbridge: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true
        },
        multicast: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanEnableEditEnable: false
        }
    },
    lan_mode: ["internet", "internet", "internet", "iptv"],
    lan_edit: [false, false, false, false]
},{
    workingMode: "unifi",
    displayName: n_str.ethIptv.t_unifi_mode,
    vlanSetting: {
        internet: {
            enable: true,
            vlanID: 500,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanTagEditEnable: false
        },
        ipphone: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        iptv: {
            enable: true,
            vlanID: 600,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        tagbridge: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true
        },
        multicast: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanEnableEditEnable: false
        }
    },
    lan_mode: ["iptv", "internet", "internet", "internet"],
    lan_edit: [false, false, false, false]
},{
    workingMode: "maxis",
    displayName: n_str.ethIptv.t_maxis_mode,
    vlanSetting: {
        internet: {
            enable: true,
            vlanID: 621,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            enableEdit: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanTagEditEnable: false
        },
        ipphone: {
            enable: true,
            vlanID: 822,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            enableEdit: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        iptv: {
            enable: true,
            vlanID: 823,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            enableEdit: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        tagbridge: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true
        },
        multicast: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            enableEdit: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanEnableEditEnable: false
        }
    },
    lan_mode: ["iptv", "internet", "internet", "ipphone"],
    lan_edit: [false, false, false, false]
},{
    workingMode: "vietnam",
    displayName: n_str.ethIptv.t_vietnam_mode,
    vlanSetting: {
        internet: {
            enable: true,
            vlanID: 35,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanTagEditEnable: false
        },
        ipphone: {
            enable: true,
            vlanID: 37,
            priority: 5,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        iptv: {
            enable: true,
            vlanID: 36,
            priority: 4,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        tagbridge: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true
        },
        multicast: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanTagEditEnable: false,
            vlanEnableEditEnable: true
        }
    },
    lan_mode: ["internet", "internet", "iptv", "ipphone"],
    lan_edit: [false, false, false, false]
},{
    workingMode: "ptmeo",
    displayName: n_str.ethIptv.t_meo_mode,
    vlanSetting: {
        internet: {
            enable: true,
            vlanID: 12,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanTagEditEnable: false
        },
        ipphone: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        iptv: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        tagbridge: {
            enable: true,
            vlanID: 2,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true
        },
        multicast: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true,
            vlanEnableEditEnable: true
        }
    },
    lan_mode: ["internet", "internet", "internet", "tagbridge"],
    lan_edit: [false, false, false, false]
},{
    workingMode: "ptvdf",
    displayName: n_str.ethIptv.t_vdf_mode,
    vlanSetting: {
        internet: {
            enable: true,
            vlanID: 100,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanTagEditEnable: false
        },
        ipphone: {
            enable: true,
            vlanID: 101,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        iptv: {
            enable: true,
            vlanID: 105,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        tagbridge: {
            enable: true,
            vlanID: 2,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true
        },
        multicast: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true,
            vlanEnableEditEnable: true
        }
    },
    lan_mode: ["internet", "internet", "iptv", "tagbridge"],
    lan_edit: [false, false, false, false]
},{
    workingMode: "nbn",
    displayName: n_str.ethIptv.t_nbn_mode,
    vlanSetting: {
        internet: {
            enable: true,
            vlanID: 100,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanTagEditEnable: false
        },
        ipphone: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        iptv: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        tagbridge: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true
        },
        multicast: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanTagEditEnable: false,
            vlanEnableEditEnable: false
        }
    },
    lan_mode: ["internet", "internet", "internet", "internet"],
    lan_edit: [false, false, false, false]
},{
    workingMode: "ufb",
    displayName: n_str.ethIptv.t_ufb_mode,
    vlanSetting: {
        internet: {
            enable: true,
            vlanID: 10,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanTagEditEnable: false
        },
        ipphone: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        iptv: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        tagbridge: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true
        },
        multicast: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanTagEditEnable: false,
            vlanEnableEditEnable: false
        }
    },
    lan_mode: ["internet", "internet", "internet", "internet"],
    lan_edit: [false, false, false, false]
},{
    workingMode: "russia",
    displayName: n_str.ethIptv.t_russia_mode,
    vlanSetting: {
        internet: {
            enable: true,
            vlanID: 1257,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanTagEditEnable: false
        },
        ipphone: {
            enable: true,
            vlanID: 263,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        iptv: {
            enable: true,
            vlanID: 4000,
            priority: 4,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        tagbridge: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true
        },
        multicast: {
            enable: false,
            vlanID: 1110,
            priority: 4,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanEnableEditEnable: true
        }
    },
    lan_mode: ["ipphone", "internet", "internet", "iptv"],
    lan_edit: [false, false, false, false]
},{
    workingMode: "bridge",
    displayName: n_str.ethIptv.t_bridge_name,
    vlanSetting: {
        internet: {
            enable: true,
            vlanID: 2,
            priority: 0,
            extendID: 1,
            untag: 1,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanTagEditEnable: false
        },
        ipphone: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        iptv: {
            enable: true,
            vlanID: 2,
            priority: 0,
            extendID: 2,
            untag: 1,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false
        },
        tagbridge: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true
        },
        multicast: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: false,
            vlanPrioEditEnable: false,
            vlanEnableEditEnable: false
        }
    },
    lan_mode: ["internet", "internet", "iptv", "iptv"],
    lan_edit: [true, true, true, true]
},{
    workingMode: "custom",
    displayName: n_str.ethIptv.t_custom_mode,
    vlanSetting: {
        internet: {
            enable: true,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 1,
            show: true,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true,
            vlanTagEditEnable: true
        },
        ipphone: {
            enable: true,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true
        },
        iptv: {
            enable: true,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true
        },
        tagbridge: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: false,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true
        },
        multicast: {
            enable: false,
            vlanID: 0,
            priority: 0,
            extendID: 0,
            untag: 0,
            show: true,
            vlanIdEditEnable: true,
            vlanPrioEditEnable: true,
            vlanEnableEditEnable: true
        }
    },
    lan_mode: ["internet", "internet", "internet", "internet"],
    lan_edit: [true, true, true, true]
});
var lanset = new Array({
    id: "1",
    displayName: n_str.ethIptv.t_lan1
},{
    id: "2",
    displayName: n_str.ethIptv.t_lan2
},{
    id: "3",
    displayName: n_str.ethIptv.t_lan3
},{
    id: "4",
    displayName: n_str.ethIptv.t_lan4
});
var services = new Array({
    name: "internet",
    displayName: n_str.ethIptv.t_internet_vlan,
    displayVlanID: n_str.ethIptv.t_internet_vid,
    displayVlanPri: n_str.ethIptv.t_internet_pri,
    showTagOption: true
},{
    name: "ipphone",
    displayName: n_str.ethIptv.t_ipphone_vlan,
    displayVlanID: n_str.ethIptv.t_ipphone_vid,
    displayVlanPri: n_str.ethIptv.t_ipphone_pri
},{
    name: "iptv",
    displayName: n_str.ethIptv.t_iptv_vlan,
    displayVlanID: n_str.ethIptv.t_iptv_vid,
    displayVlanPri: n_str.ethIptv.t_iptv_pri
},{
    name: "tagbridge",
    displayName: s_str.bridge,
},{
    name: "multicast",
    displayName: n_str.ethIptv.t_multicast_vlan,
    displayVlanID: n_str.ethIptv.t_multicast_vid,
    displayVlanPri: n_str.ethIptv.t_multicast_pri,
    lanSelectable: false,
    showEnableOption: true,
    enableCb: "multicastEnableClick()"
});
function multicastEnableClick() {
    if ($.id("multicastvlanEnable").checked) {
        $.removeClass($.id("div_serv_multicast"), "vidDisable");
        $.removeClass($.id("div_serv_multicast"), "vpriDisable");
        $.id("multicast_vlanid").disabled = false;
        $.id("multicast_vlanprio").disabled = false
    } else {
        $.addClass($.id("div_serv_multicast"), "vidDisable");
        $.addClass($.id("div_serv_multicast"), "vpriDisable");
        $.id("multicast_vlanid").disabled = true;
        $.id("multicast_vlanprio").disabled = true
    }
}
function initLanOption(obj) {
    $.id("lan_setting").innerHTML = "";
    for (var lanIdx in lanset) {
        var p = $.c("p");
        p.setAttribute("class", "L1");
        p.setAttribute("id", "div_lan" + lanset[lanIdx]["id"]);
        var b = $.c("b");
        b.setAttribute("class", "item T");
        b.innerHTML = lanset[lanIdx]["displayName"] + ":";
        p.appendChild(b);
        var sel = $.c("select");
        sel.setAttribute("class", "S");
        sel.setAttribute("id", "lan" + lanset[lanIdx]["id"]);
        for (var servIdx in services) {
            if (services[servIdx]["lanSelectable"] === false) {
                continue
            }
            if (obj != undefined && obj.vlanSetting[services[servIdx].name].enable == false) {
                continue
            }
            var opt = $.c("option");
            opt.setAttribute("value", services[servIdx].name);
            opt.setAttribute("id", "lan" + lanset[lanIdx]["id"] + "_" + services[servIdx].name);
            opt.text = services[servIdx].displayName;
            try {
                sel.add(opt, null)
            } catch (e) {
                sel.add(opt)
            }
        }
        p.appendChild(sel);
        $.id("lan_setting").appendChild(p)
    }
}
function refreshLanOption(obj) {
    initLanOption(obj)
}
function initISPService() {
    for (var servIdx in services) {
        var p = $.c("p");
        p.setAttribute("class", "L1 nd");
        p.setAttribute("id", "div_serv_" + services[servIdx]["name"]);
        var b = $.c("b");
        b.setAttribute("class", "item T vid");
        b.innerHTML = services[servIdx]["displayVlanID"];
        p.appendChild(b);
        var input = $.c("input");
        input.setAttribute("type", "text");
        input.setAttribute("value", "0");
        input.setAttribute("id", services[servIdx]["name"] + "_vlanid");
        input.setAttribute("class", "text vid");
        input.setAttribute("size", "5");
        input.setAttribute("maxLength", "4");
        p.appendChild(input);
        var b = $.c("b");
        b.className = "T ispService vpri";
        b.innerHTML = services[servIdx]["displayVlanPri"];
        p.appendChild(b);
        var sel = $.c("select");
        sel.setAttribute("id", services[servIdx]["name"] + "_vlanprio");
        sel.setAttribute("class", "vpri");
        for (var prio = 0; prio < 8; prio++) {
            var opt = $.c("option");
            opt.setAttribute("value", prio);
            opt.text = prio;
            try {
                sel.add(opt, null)
            } catch (e) {
                sel.add(opt)
            }
        }
        p.appendChild(sel);
        if (services[servIdx]["showTagOption"] === true) {
            var input = $.c("input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("id", services[servIdx]["name"] + "tagEnable");
            input.setAttribute("class", "tagEnable");
            p.appendChild(input);
            var b = $.c("b");
            b.setAttribute("class", "T tagEnable");
            b.innerHTML = n_str.ethIptv.t_8021q_tag;
            p.appendChild(b)
        }
        if (services[servIdx]["showEnableOption"] === true) {
            var input = $.c("input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("class", "vlanEnable");
            input.setAttribute("id", services[servIdx]["name"] + "vlanEnable");
            if (typeof services[servIdx].enableCb != undefined) {
                input.setAttribute("onclick", services[servIdx].enableCb)
            }
            p.appendChild(input);
            var b = $.c("b");
            b.setAttribute("class", "T vlanEnable");
            b.innerHTML = m_str.en;
            p.appendChild(b)
        }
        $.id("ispService").appendChild(p)
    }
}
function initModeOptions() {
    var obj = $.id("iptv_mode");
    for (var mode in default_mode_data) {
        var opt = $.c("option");
        opt.setAttribute("value", default_mode_data[mode].workingMode);
        opt.setAttribute("id", "t_mode_" + default_mode_data[mode].workingMode);
        opt.text = default_mode_data[mode].displayName;
        try {
            obj.add(opt, null)
        } catch (e) {
            obj.add(opt)
        }
    }
}
function initVlanCfg(cb) {
    vlanObj = $.act(ACT_GET, VLAN, null, null);
    ispService = $.act(ACT_GL, ISP_SERVICE, null, null);
    $.exe(cb)
}
function fillVlanCfg(ret) {
    if (ret) {
        return
    }
    if (vlanObj.enable == "1" && vlanObj.workingMode != "normal" && vlanObj.workingMode != "automatic" && vlanObj.workingMode != "") {
        $.id("iptv_enable").checked = true
    } else {
        $.id("iptv_enable").checked = false
    }
    initMode(vlanObj.workingMode)
}
function selectOptionByValue(obj, value) {
    var exist = false;
    for (var i = 0; i < obj.length; i++) {
        if (obj.options[i].value == value) {
            exist = true;
            break
        }
    }
    if (exist) {
        obj.value = value
    }
    return exist
}
function fillData() {
    for (var servIdx in services) {
        if (servIdx == 0) {
            $.id(services[servIdx]["name"] + "_vlanid").value = vlanObj.internetGroupVlanID;
            $.id(services[servIdx]["name"] + "_vlanprio").value = vlanObj.internetGroupPriority;
            if (services[servIdx]["showTagOption"] === true) {
                $.id(services[servIdx]["name"] + "tagEnable").checked = vlanObj.internetUntag == "0"
            }
            for (var lanIdx in lanset) {
                if ((1 << lanIdx) & vlanObj.internetGroupLanPort) {
                    $.id("lan" + lanset[lanIdx]["id"]).value = services[servIdx]["name"]
                }
            }
        } else {
            for (var idx = 0; idx < ispService.length; idx++) {
                if (services[servIdx]["name"] == ispService[idx].name) {
                    $.id(services[servIdx]["name"] + "_vlanid").value = ispService[idx].vlanID;
                    $.id(services[servIdx]["name"] + "_vlanprio").value = ispService[idx].priority;
                    if (services[servIdx]["showEnableOption"] === true) {
                        $.id(services[servIdx]["name"] + "vlanEnable").checked = (ispService[idx].enable == "1");
                        if ($.id(services[servIdx]["name"] + "vlanEnable").onclick != null) {
                            $.id(services[servIdx]["name"] + "vlanEnable").onclick()
                        }
                    }
                    for (var lanIdx in lanset) {
                        if ((1 << lanIdx) & ispService[idx].lanPort) {
                            $.id("lan" + lanset[lanIdx]["id"]).value = services[servIdx]["name"]
                        }
                    }
                    break
                }
            }
        }
    }
}
function fillDataCurrVlan(currVlan) {
    var ispSrv = currVlan.vlanSetting;
    for (var servIdx in services) {
        if (ispSrv[services[servIdx]["name"]] !== undefined) {
            $.id(services[servIdx]["name"] + "_vlanid").value = ispSrv[services[servIdx]["name"]].vlanID;
            $.id(services[servIdx]["name"] + "_vlanprio").value = ispSrv[services[servIdx]["name"]].priority;
            if (services[servIdx]["showEnableOption"] === true) {
                $.id(services[servIdx]["name"] + "vlanEnable").checked = (ispSrv[services[servIdx]["name"]].enable == "1");
                if ($.id(services[servIdx]["name"] + "vlanEnable").onclick != null) {
                    $.id(services[servIdx]["name"] + "vlanEnable").onclick()
                }
            }
            for (var lanIdx in lanset) {
                if ((1 << lanIdx) & ispSrv[services[servIdx]["name"]].lanPort) {
                    $.id("lan" + lanset[lanIdx]["id"]).value = services[servIdx]["name"]
                }
            }
        }
    }
}
function initMode(mode) {
    if (selectOptionByValue($.id("iptv_mode"), mode)) {
        showMode();
        fillData()
    } else {
        if (mode == "automatic" || mode == "normal" || mode == "") {
            showMode()
        }
    }
}
function showDefaultData(obj) {
    refreshLanOption(obj);
    for (var servIdx in services) {
        if (obj.vlanSetting[services[servIdx].name].show == false) {
            $.addClass($.id("div_serv_" + services[servIdx].name), "nd")
        } else {
            $.removeClass($.id("div_serv_" + services[servIdx].name), "nd")
        }
        $.id(services[servIdx]["name"] + "_vlanid").value = obj.vlanSetting[services[servIdx].name].vlanID;
        $.id(services[servIdx]["name"] + "_vlanprio").value = obj.vlanSetting[services[servIdx].name].priority;
        if (obj.vlanSetting[services[servIdx].name].vlanIdEditEnable == false) {
            $.addClass($.id("div_serv_" + services[servIdx].name), "vidDisable");
            $.id(services[servIdx]["name"] + "_vlanid").disabled = true
        } else {
            $.removeClass($.id("div_serv_" + services[servIdx].name), "vidDisable");
            $.id(services[servIdx]["name"] + "_vlanid").disabled = false
        }
        if (obj.vlanSetting[services[servIdx].name].vlanPrioEditEnable == false) {
            $.addClass($.id("div_serv_" + services[servIdx].name), "vpriDisable");
            $.id(services[servIdx]["name"] + "_vlanprio").disabled = true
        } else {
            $.removeClass($.id("div_serv_" + services[servIdx].name), "vpriDisable");
            $.id(services[servIdx]["name"] + "_vlanprio").disabled = false
        }
        if (services[servIdx]["showTagOption"] === true) {
            $.id(services[servIdx]["name"] + "tagEnable").checked = obj.vlanSetting[services[servIdx].name].untag == "0";
            if (obj.vlanSetting[services[servIdx].name].vlanTagEditEnable == false) {
                $.id(services[servIdx]["name"] + "tagEnable").disabled = true;
                $.addClass($.id("div_serv_" + services[servIdx].name), "vlanTagDisable")
            } else {
                $.id(services[servIdx]["name"] + "tagEnable").disabled = false;
                $.removeClass($.id("div_serv_" + services[servIdx].name), "vlanTagDisable")
            }
        }
        if (services[servIdx]["showEnableOption"] === true) {
            $.id(services[servIdx]["name"] + "vlanEnable").checked = obj.vlanSetting[services[servIdx].name].enable == true;
            if (obj.vlanSetting[services[servIdx].name].vlanEnableEditEnable == false) {
                $.id(services[servIdx]["name"] + "vlanEnable").disabled = true;
                $.addClass($.id("div_serv_" + services[servIdx].name), "vlanDisable")
            } else {
                $.id(services[servIdx]["name"] + "vlanEnable").disabled = false;
                $.removeClass($.id("div_serv_" + services[servIdx].name), "vlanDisable")
            }
            if ($.id(services[servIdx]["name"] + "vlanEnable").onclick != null) {
                $.id(services[servIdx]["name"] + "vlanEnable").onclick()
            }
        }
    }
    for (var lanIdx in lanset) {
        $.id("lan" + lanset[lanIdx]["id"]).value = obj.lan_mode[lanIdx];
        $.id("lan" + lanset[lanIdx]["id"]).disabled = obj.lan_edit[lanIdx] == false;
        if (obj.lan_edit[lanIdx] == false) {
            $.addClass($.id("div_lan" + lanset[lanIdx]["id"]), "iptv_disable")
        } else {
            $.removeClass($.id("div_lan" + lanset[lanIdx]["id"]), "iptv_disable")
        }
    }
}
function showMode() {
    if ($.id("iptv_enable").checked == false) {
        showDefaultData(noIptvData);
        $.addClass($.id("iptv_mode_div"), "nd");
        return
    }
    var mode = $.id("iptv_mode").value;
    $.removeClass($.id("iptv_mode_div"), "nd");
    for (var modeIdx in default_mode_data) {
        if (mode == default_mode_data[modeIdx].workingMode) {
            showDefaultData(default_mode_data[modeIdx])
        }
    }
}
function doCheckData(obj) {
    if (obj.vlanSetting[services[0].name].lanPort == 0) {
        $.alert(ERR_VLAN_NO_INTERNET_GROUP);
        return false
    }
    for (var i = 0; i < services.length; i++) {
        if (obj.vlanSetting[services[i].name].show != false && obj.vlanSetting[services[i].name].enable == true) {
            if ($.num(obj.vlanSetting[services[i].name].vlanID, [2, 4094], true)) {
                $.alert(ERR_VLAN_INVALID_VLANID);
                $.id(services[i].name + "_vlanid").focus();
                $.id(services[i].name + "_vlanid").select();
                return false
            }
        }
    }
    for (var i = 0; i < services.length - 1; i++) {
        if (obj.vlanSetting[services[i].name].show == false || obj.vlanSetting[services[i].name].enable == false) {
            continue
        }
        for (var j = i + 1; j < services.length; j++) {
            if (obj.vlanSetting[services[j].name].show == false || obj.vlanSetting[services[j].name].enable == false) {
                continue
            }
            if (obj.vlanSetting[services[i].name].vlanID == obj.vlanSetting[services[j].name].vlanID) {
                $.alert(ERR_VLAN_SAME_VLANID);
                if ($.id(services[i].name + "_vlanid").disabled) {
                    $.id(services[j].name + "_vlanid").focus();
                    $.id(services[j].name + "_vlanid").select()
                } else {
                    $.id(services[i].name + "_vlanid").focus();
                    $.id(services[i].name + "_vlanid").select()
                }
                return false
            }
        }
    }
    return true
}
function getDefaultCfg(mode) {
    var result = {};
    var hasMode = false;
    var defaultVlanCfg = {};
    for (var modeIdx in default_mode_data) {
        if (default_mode_data[modeIdx].workingMode == mode) {
            hasMode = true;
            break
        }
    }
    if (hasMode) {
        defaultVlanCfg = default_mode_data[modeIdx]
    } else {
        defaultVlanCfg = noIptvData
    }
    result.workingMode = defaultVlanCfg.workingMode;
    result.vlanSetting = {};
    for (var servIdx in services) {
        result.vlanSetting[services[servIdx].name] = {};
        result.vlanSetting[services[servIdx].name].enable = defaultVlanCfg.vlanSetting[services[servIdx].name].enable;
        result.vlanSetting[services[servIdx].name].vlanID = defaultVlanCfg.vlanSetting[services[servIdx].name].vlanID;
        result.vlanSetting[services[servIdx].name].priority = defaultVlanCfg.vlanSetting[services[servIdx].name].priority;
        result.vlanSetting[services[servIdx].name].extendID = defaultVlanCfg.vlanSetting[services[servIdx].name].extendID;
        result.vlanSetting[services[servIdx].name].untag = defaultVlanCfg.vlanSetting[services[servIdx].name].untag;
        result.vlanSetting[services[servIdx].name].show = defaultVlanCfg.vlanSetting[services[servIdx].name].show;
        result.vlanSetting[services[servIdx].name].lanPort = defaultVlanCfg.vlanSetting[services[servIdx].name].lanPort ? defaultVlanCfg.vlanSetting[services[servIdx].name].lanPort : 0
    }
    return result
}
function doCollectData(obj) {
    for (var servIdx in services) {
        if (services[servIdx].showEnableOption == true) {
            obj.vlanSetting[services[servIdx].name].enable = $.id(services[servIdx].name + "vlanEnable").checked
        }
        obj.vlanSetting[services[servIdx].name].vlanID = $.id(services[servIdx].name + "_vlanid").value;
        obj.vlanSetting[services[servIdx].name].priority = $.id(services[servIdx].name + "_vlanprio").value;
        if (services[servIdx].showTagOption == true) {
            obj.vlanSetting[services[servIdx].name].untag = $.id(services[servIdx].name + "tagEnable").checked ? 0 : 1
        }
    }
    for (var lanIdx in lanset) {
        obj.vlanSetting[$.id("lan" + lanset[lanIdx].id).value].lanPort += (1 << lanIdx)
    }
}
;