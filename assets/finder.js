(function () {

    let selectors = {
        jsSteps: '.js-steps',
        jsBtnNext: '.js-btn-next',
        jsFfPrev: '.js-ff-prev',
        jsFfNext: '.js-ff-next',

        sizeType: '.js-size-type',
        selectNums: '.js-size-num',
        sizeFinderResults: '.js-size-finder-result',

        jsHeadDefault: '.js-finder-head-default',
        jsHeadResult: '.js-finder-head-result',

        resultLoader: '.result-loader',
    };

    let jsSteps = document.querySelectorAll(selectors.jsSteps);
    let jsBtnNext = document.querySelector(selectors.jsBtnNext);
    let jsFfPrev = document.querySelector(selectors.jsFfPrev);
    let jsFfNext = document.querySelector(selectors.jsFfNext);
    let sizeType = document.querySelector(selectors.sizeType);
    let selectNums = document.querySelectorAll(selectors.selectNums);
    let sizeFinderResults = document.querySelectorAll(selectors.sizeFinderResults);
    let jsHeadDefault = document.querySelector(selectors.jsHeadDefault);
    let jsHeadResult = document.querySelector(selectors.jsHeadResult);
    let resultLoader = document.querySelector(selectors.resultLoader);


    let current_step = "step1"

    let size_selected = ""

    let steps_json = {
        "step1": { // gender
            "status": false,
            "value": ""
        },
        "step2": { // size
            "status": false,
            "value": ""
        },
        "step3": { // ability 
            "status": false,
            "value": ""
        },
        "step4": { // style (pre-set all-mountain ma lascio false lo status)
            "status": false,
            "value": "all-mountain"
        }
    }

    let riding_style_json = {
        "style-1": 5,
        "style-2": 5,
    }

    function finder_set_step(step, status, value) {
        steps_json[step].status = status
        steps_json[step].value = value
    }
    function finder_clean_values(values) {
        values.forEach(value => {
            value.classList.remove("selected")
        })
    }
    function finder_change_next(value) {

        if (value == "active") {
            jsBtnNext.classList.add("active")
            jsFfNext.classList.remove("hidden")
            jsBtnNext.classList.remove("hide")
        } else if (value == "hide") {
            jsBtnNext.classList.add("hide")
            jsFfNext.classList.add("hidden")
        } else {
            jsBtnNext.classList.remove("active")
            jsFfNext.classList.add("hidden")
            jsBtnNext.classList.remove("hide")
        }
    }

    function finder_navigation_check() {
        for (const [step_name, step] of Object.entries(steps_json)) {
            let ff_current_step = document.querySelector(".ff-step[data-step='" + step_name + "']")
            if (step.status) {
                ff_current_step.classList.add("active")
            } else {
                ff_current_step.classList.remove("active")
            }
        }
    }

    function finder_arrows_check() {

        current_step == "step1" ?  jsFfPrev.classList.add("hidden") : jsFfPrev.classList.remove("hidden")

        if (current_step == "step4") { // se arrivo allo step4 lo setto true, in quanto pre-configurato
            steps_json.step4.status = true
            finder_change_next("active")
            finder_navigation_check()
        }

        if (current_step != "step5") {
            steps_json[current_step].status ? finder_change_next("active") : finder_change_next("hidden")
            jsHeadResult.classList.add("hide")
            jsHeadDefault.classList.remove("hide")
        } else { 
            // step risultati
            finder_change_next("hide")
            let finderResults = document.querySelectorAll('.js-step5-value')
            finderResults.forEach(finderResult => {
                finderResult.querySelector(".js-fs-result-img").setAttribute("src", "")
                finderResult.querySelector(".js-fs-result-title").innerHTML = ""
                finderResult.querySelector(".js-fs-result-size").innerHTML = ""
                finderResult.querySelector(".js-fs-result-link").setAttribute("href", "")
                finderResult.classList.add("hide")
            })
            resultLoader.classList.remove("hide")
            load_result()
        }

    }

    function load_result() {

        let combination_to_search = steps_json.step1.value + "," + steps_json.step3.value + "," + steps_json.step4.value

        jsHeadResult.classList.remove("hide")
        jsHeadDefault.classList.add("hide")

        console.log("Size: "+size_selected)

        // mini: cadet mini
        // xl: force

        jQuery.get({
            url: "/pages/finder-list?view=finder.json",
            success: function (products_comb) {

                var list_comb = JSON.parse(products_comb)

                for (var combination of Object.keys(list_comb)) {

                    if (combination == combination_to_search) {
                        var scelta1 = list_comb[combination][0]
                        var scelta2 = list_comb[combination][1]

                        let finderResults = document.querySelectorAll('.js-step5-value')
                        console.log(scelta1,scelta2)

                        // Forzo per kids mini un attacco
                        if (size_selected == "Mini") {
                            var scelta1 = "kids-cadet-mini-snowboard-binding-2024"
                            var scelta2 = "kids-cadet-mini-snowboard-binding-2024"
                        }
                        // Forzo per man extra large un attacco
                        if (size_selected == "Extra Large") {
                            var scelta1 = "union-force-mens-snowboard-binding-2025"
                            var scelta2 = "union-force-mens-snowboard-binding-2025"
                        }

                        let product1 = jQuery.getJSON('/products/'+scelta1+'.js', function(product) {

                            // console.log(product)
                            // console.log(finderResults[0])

                            finderResults[0].querySelector(".js-fs-result-img").setAttribute("src", product.featured_image)
                            finderResults[0].querySelector(".js-fs-result-title").innerHTML = product.title
                            finderResults[0].querySelector(".js-fs-result-size").innerHTML = steps_json.step2.value
                            finderResults[0].querySelector(".js-fs-result-link").setAttribute("href", product.url)

                        })

                        let product2 = jQuery.getJSON('/products/'+scelta2+'.js', function(product) {

                            // console.log(product)
                            // console.log(finderResults[1])

                            finderResults[1].querySelector(".js-fs-result-img").setAttribute("src", product.featured_image)
                            finderResults[1].querySelector(".js-fs-result-title").innerHTML = product.title
                            finderResults[1].querySelector(".js-fs-result-size").innerHTML = steps_json.step2.value
                            finderResults[1].querySelector(".js-fs-result-link").setAttribute("href", product.url)

                        })

                        Promise.all([product1, product2]).then(function(data){
                            finderResults[0].classList.remove("hide")
                            if ((size_selected != "Mini") && (size_selected != "Extra Large")) {
                                finderResults[1].classList.remove("hide")
                            }
                            resultLoader.classList.add("hide")
                        });

                    }

                }
            }
        })
    }

    function size_num_hide_all() {
        selectNums.forEach(selectNum => {
            selectNum.classList.add("hide")
        })
    }

    function reset_size() {
        sizeType.value = ""
        size_num_hide_all()
        document.querySelector(".select-union--inactive").classList.remove("hide")

        sizeFinderResults.forEach(sizeFinderResult => {
            sizeFinderResult.classList.add("hide")
        })
        document.querySelector(".fs-size-result__box--empty").classList.remove("hide")
    }

    function calculate_size(combination_to_search) {

        jQuery.get({
            url: "/pages/finder-list?view=find-size.json",
            success: function (sizes_list) {

                var sizes_list_parse = JSON.parse(sizes_list)
                let sizeResult__value
                let size_find

                for (var size_single of Object.keys(sizes_list_parse)) {

                    sizes_list_parse[size_single].forEach((combination_single, cs) => {

                        if (combination_to_search == combination_single) {

                            sizeFinderResults.forEach((sizeFinderResult) => {

                                sizeResult__value = sizeFinderResult.getAttribute("attr-value")

                                if (sizeResult__value == size_single) {
                                    sizeFinderResult.classList.remove("hide")
                                    size_find = size_single
                                    size_selected = size_single
                                } else {
                                    sizeFinderResult.classList.add("hide")
                                }
                            })

                        }
                    })
                }

                finder_set_step("step2", true, size_find)
                finder_navigation_check()

            }
        })

    }


    jsFfNext.addEventListener("click", function () {
        jsBtnNext.click()
    })

    jsBtnNext.addEventListener("click", function () {
        if (jsBtnNext.classList.contains("active")) {
            // prosegui negli step
            let step_number = Number(current_step.replace("step", ""))

            let next_step = step_number + 1

            let current_step_content = document.querySelector(".finder-step[data-step='step" + step_number + "']")
            let next_step_content = document.querySelector(".finder-step[data-step='step" + next_step + "']")

            current_step = "step" + next_step

            current_step_content.classList.add("hide")
            next_step_content.classList.remove("hide")

        } else {
            // errore nello step corrente
            let error_current_step = document.querySelector(".finder-step[data-step='" + current_step + "']")

            error_current_step.classList.add("error")
            setTimeout(function () {
                error_current_step.classList.remove("error")
            }, 2000);
        }

        finder_arrows_check()

        console.log(steps_json)
    })

    jsFfPrev.addEventListener("click", function () {

        let step_number = Number(current_step.replace("step", ""))

        let prev_step = step_number - 1

        document.querySelector(".finder-step[data-step='step" + step_number + "']").classList.add("hide")
        document.querySelector(".finder-step[data-step='step" + prev_step + "']").classList.remove("hide")

        current_step = "step" + prev_step

        finder_arrows_check()
    })

    jsSteps.forEach(jsStep => {

        let step = jsStep.getAttribute("data-step")
        let step1values = document.querySelectorAll(".js-step1-value");
        let step3values = document.querySelectorAll(".js-step3-value");
        let step4values = document.querySelectorAll(".js-step4-value");

        // STEP 1
        if (step1values) {
            step1values.forEach(step1value => {
                step1value.addEventListener("click", function () {

                    // pulisco valori a frontend e nel json
                    finder_clean_values(step1values)
                    finder_set_step("step1", false, "")
                    finder_set_step("step2", false, "") // reset size

                    let cat = step1value.getAttribute("data-cat")
                    step1value.classList.add("selected")

                    finder_set_step("step1", true, cat)
                    finder_change_next("active")

                    finder_navigation_check()

                    reset_size()

                })
            })
        }

        // STEP 2
        check_size()

        // STEP 3
        if (step3values) {
            
            step3values.forEach(step3value => {
                step3value.addEventListener("click", function () {

                    // pulisco valori a frontend e nel json
                    finder_clean_values(step3values)
                    finder_set_step("step3", false, "")

                    let ablity = step3value.getAttribute("data-ablity")
                    step3value.classList.add("selected")

                    finder_set_step("step3", true, ablity)
                    finder_change_next("active")


                    finder_navigation_check()

                    // reset_size()

                })
            })
        }

        // STEP 4
        if (step4values) {

            step4values.forEach(step4value => {

                let riding_style = step4value.getAttribute("data-style")
                let selector_pin = step4value.querySelector(".selector-pin")
                let selector__line = step4value.querySelector(".level-selector__line")

                var oldX = 0, newX = 0; // for storing X (horizontal) positions

                // We do the dragging here
                function elementDrag(e) {
                    e = e || window.event;
                    e.preventDefault();
                    newX = oldX - e.clientX; // to calculate how much we have moved
                    oldX = e.clientX; // store current value to use for next move
                    let pos = selector_pin.offsetLeft - newX

                    let line_max_width = Number(selector__line.offsetWidth)

                    if ((pos > 0) && (pos < line_max_width)) {
                        selector_pin.style.left = (pos) + "px"; // update left position
                    }
                }

                // we do this so there is not multiple event handlers
                function closeDragElement() {
                    document.onmouseup = null;
                    document.onmousemove = null;

                    let pos = Number(selector_pin.offsetLeft)
                    let line_max_width = Number(selector__line.offsetWidth)
                    let segment_width = line_max_width / 10

                    if ((pos > 0) && (pos < (segment_width * 0.5))) {
                        selector_pin.style.left = (segment_width * 0) + "px";
                    } else if (pos < (segment_width * 1.5)) {
                        selector_pin.style.left = (segment_width * 1) + "px";
                    } else if (pos < (segment_width * 2.5)) {
                        selector_pin.style.left = (segment_width * 2) + "px";
                    } else if (pos < (segment_width * 3.5)) {
                        selector_pin.style.left = (segment_width * 3) + "px";
                    } else if (pos < (segment_width * 4.5)) {
                        selector_pin.style.left = (segment_width * 4) + "px";
                    } else if (pos < (segment_width * 5.5)) {
                        selector_pin.style.left = (segment_width * 5) + "px";
                    } else if (pos < (segment_width * 6.5)) {
                        selector_pin.style.left = (segment_width * 6) + "px";
                    } else if (pos < (segment_width * 7.5)) {
                        selector_pin.style.left = (segment_width * 7) + "px";
                    } else if (pos < (segment_width * 8.5)) {
                        selector_pin.style.left = (segment_width * 8) + "px";
                    } else if (pos < (segment_width * 9.5)) {
                        selector_pin.style.left = (segment_width * 9) + "px";
                    } else if (pos < (segment_width * 10.5)) {
                        selector_pin.style.left = (segment_width * 10) + "px";
                    }

                    let position_left_pin = selector_pin.style.left

                    riding_style_json[riding_style] = (Number(position_left_pin.replace("px", "")) / line_max_width) * 10

                    console.log(riding_style_json)


                    if (riding_style_json["style-2"] < 3) {
                        steps_json.step4.value = "street-and-jibbing"
                        steps_json.step4.status = true
                    }
                    else if (riding_style_json["style-2"] > 7) {
                        steps_json.step4.value = "carving-boardercross"
                        steps_json.step4.status = true
                    }
                    else if (riding_style_json["style-1"] < 2 ) {
                        steps_json.step4.value = "freestyle-park"
                        steps_json.step4.status = true
                    }
                    else if (riding_style_json["style-1"] > 8) {
                        steps_json.step4.value = "freeride"
                        steps_json.step4.status = true
                    }
                    else if (riding_style_json["style-1"] == 5) {
                        steps_json.step4.value = "all-mountain"
                        steps_json.step4.status = true
                    }
                    else if ((riding_style_json["style-1"] >= 2) && (riding_style_json["style-1"] < 5 )) {
                        steps_json.step4.value = "all-mountain--freestyle"
                        steps_json.step4.status = true
                    }
                    else if ((riding_style_json["style-1"] > 5) && (riding_style_json["style-1"] <= 8)) {
                        steps_json.step4.value = "all-mountain--freeride"
                        steps_json.step4.status = true
                    }
                    else {
                        steps_json.step4.value = "all-mountain2"
                        steps_json.step4.status = true
                    }

                    /*
                    da associare a queste:

                    "freeride" ok
                    "all-mountain--freestyle" ok
                    "all-mountain" ok
                    "all-mountain--freeride"
                    "freestyle-park" ok

                    "carving-boardercross" ok 7/10
                    "street-and-jibbing" ok 1/3

                    "splitboarding" NO
                    */

                    finder_change_next("active")
                    console.log(steps_json.step4.value)



                }

                // when mouse down on element attach mouse move and mouse up for document
                // so that if mouse goes outside element still drags
                function dragMouseDown(e) {
                    e = e || window.event;
                    e.preventDefault();
                    oldX = e.clientX; // store current value to use for mouse move calculation
                    document.onmouseup = closeDragElement;
                    document.onmousemove = elementDrag;
                }

                selector_pin.onmousedown = dragMouseDown;



            })

        }


    });

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function check_size() {

        let select_selected = document.querySelector(".select-union--inactive")
        let select_selected__value
        let gender = steps_json.step1.value

        sizeType.addEventListener("change", function () {

            let size = sizeType.value
            gender = steps_json.step1.value

            size_num_hide_all()

            if (size) {

                selectNums.forEach(selectNum => {

                    let selectNum__gender = selectNum.getAttribute("attr-gender")
                    let selectNum__type = selectNum.getAttribute("attr-type")

                    let type_gender

                    if (size == "us") {
                        type_gender = "us-" + selectNum__gender.toLowerCase()
                    } else {
                        type_gender = selectNum__type
                    }

                    if ((selectNum__gender == gender) && (selectNum__type.includes(size))) {

                        selectNum.classList.remove("hide")
                        select_selected = selectNum

                        select_selected.addEventListener("change", function () {
                            select_selected__value = select_selected.value
                            var combination_to_search = gender + "$" + type_gender + "$" + select_selected__value
                            let calculate_result = calculate_size(combination_to_search)
                            Promise.all([calculate_result]).then(function(data){
                                console.log("promise?")
                                
                                finder_change_next("active")
                            });
                        })

                    }

                })




            } else {
                document.querySelector(".select-union--inactive").classList.remove("hide")
            }

        })

        finder_change_next("hidden") // forzo di nuovo per via dell'async sullo step2

    }


})()