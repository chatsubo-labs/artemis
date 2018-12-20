function format_hijacks_datatable(a){if("code"in a)return{};for(entry in a)a[entry]=format_hijack_entry(a[entry]);return a}function format_datatable(a){if("code"in a)return{};if(0<a.length)if("hijack_as"in a[0])for(entry in a)a[entry]=format_hijack_entry(a[entry]);else if("service"in a[0])for(entry in a)a[entry]=format_bgp_update(a[entry]);return a}
function format_hijack_entry(a){"hijack_as"in a&&(a.hijack_as=format_hijack_as(a.hijack_as));"time_detected"in a&&(a.time_detected=transform_date_to_local(a.time_detected));"seen"in a&&(a.seen=format_handled_seen(a.seen));"key"in a&&(a.hijack_link=hijack_key_create_link([a.key]));a.status=format_hijack_status(a);a.mark_key='<input class="form-check-input" type="checkbox" value="" id="mark_'+a.key+'">';return a}
function format_bgp_updates_datatable(a){if("code"in a)return{};for(entry in a)a[entry]=format_bgp_update(a[entry]);return a}
function format_bgp_update(a){"as_path"in a&&(a.as_path=format_as_path(a.as_path));"orig_path"in a&&(a.orig_path=format_orig_path(a.orig_path));"timestamp"in a&&(a.timestamp=transform_date_to_local(a.timestamp));"service"in a&&(a.service=format_service(a.service));"origin_as"in a&&(a.origin_as=format_origin_as(a.origin_as));"peer_asn"in a&&(a.peer_asn="<cc_as>"+a.peer_asn+"</cc_as>");"communities"in a&&(a.communities=format_communities(a.communities));"handled"in a&&(a.handled=format_handled_seen(a.handled));
"hijack_key"in a&&(a.hijack_link=hijack_key_create_link(a.hijack_key));return a}function format_handled_seen(a){return a?'<img src="'+static_urls["handled.png"]+'" />':'<img src="'+static_urls["unhadled.png"]+'" />'}function format_as_path(a){var b="";for(as_item in a)b+="<cc_as>"+a[as_item]+"</cc_as> ";return b}function format_orig_path(a){if(""==a||null==a)return"Same as the AS path.";var b="";for(as_item in a)b+="<cc_as>"+a[as_item]+"</cc_as> ";return b}
function transform_date_to_local(a){a=moment.utc(a);return a._isValid?a.local().format("YYYY-MM-DD HH:mm:ss"):"Never"}
function format_hijack_status(a){var b="";1==a.active&&(b+='<span class="badge badge-pill badge-danger">Ongoing</span>');1==a.under_mitigation&&(b+='<span class="badge badge-pill badge-primary">Under Mitigation</span>');1==a.resolved&&(b+='<span class="badge badge-pill badge-success">Resolved</span>');1==a.ignored&&(b+='<span class="badge badge-pill badge-warning">Ignored</span>');1==a.outdated&&(b+='<span class="badge badge-pill badge-dark">Outdated</span>');1==a.withdrawn&&(b+='<span class="badge badge-pill badge-info">Withdrawn</span>');
return b}function format_service(a){return"<service>"+a.replace(/\|/g," -> ")+"</service>"}function format_origin_as(a){return"-1"==a||-1==a?"-":"<cc_as>"+a+"</cc_as>"}function format_hijack_as(a){return"-1"==a||-1==a?"Unknown":"<cc_as>"+a+"</cc_as>"}function format_communities(a){var b="";return a.forEach(function(a){b+=a[0]+":"+a[1]+", "}),"["+b.slice(0,-2)+"]"}
function transform_unix_timestamp_to_client_local_time(a){if(0==a)return"Never";a=moment.unix(a);return moment(a).local().format("DD-MM-YYYY HH:mm:ss")}function isValidDate(a){return a instanceof Date&&!isNaN(a)}function hijack_key_create_link(a){if(null!=a){if(1==a.length&&null!=a[0])return'<a href="'+hijack_redirect+"?key="+a[0]+'">View</a>';if(1<a.length)return'<a href="'+hijack_redirect+"s?hijack_keys="+a+'">View</a>'}return""}function display_hijack_key(a){return null!=a&&"0"!=a?a:""}
function display_timezone(){var a=(new Date).getTimezoneOffset();return 0>a?"GMT+"+a/-60+" ("+Intl.DateTimeFormat().resolvedOptions().timeZone+")":"GMT-"+a/60+" ("+Intl.DateTimeFormat().resolvedOptions().timeZone+")"};