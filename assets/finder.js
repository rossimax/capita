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

    sessionStorage.SessionName = "Step2"
    sessionStorage.SessionName = "Step2_r1"
    sessionStorage.SessionName = "Step2_r2"

    sessionStorage.setItem("Step2","")
    sessionStorage.setItem("Step2_r1","")
    sessionStorage.setItem("Step2_r2","")

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
            "value": "all-mountain&&medium"
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

        document.querySelectorAll(".ff-step").forEach(ff_step => {
            ff_step.classList.remove("active")
        })

        let step_check = document.querySelector(".finder-step:not(.hide)")
        let step_check_num = step_check.getAttribute("data-step")

        if (step_check_num == "step5") {
            step_check_num = "step4"
        }
        let ff_current_step = document.querySelector(".ff-step[data-step='" + step_check_num + "']")

        ff_current_step.classList.add("active")

        // num_actual_step = document.querySelector(".js-steps:not(.hide)").getAttribute("data-step")
        // document.querySelectorAll(".ff-step").forEach(ff_step => {
        //     ff_step.classList.remove("active")
        // })
        // document.querySelector(".ff-step[data-step="+num_actual_step+"]").classList.add("active")

        // for (const [step_name, step] of Object.entries(steps_json)) {
        //     let ff_current_step = document.querySelector(".ff-step[data-step='" + step_name + "']")
        //     if (step.status) {  
        //         document.querySelectorAll(".ff-step").forEach(ff_step => {
        //             ff_step.classList.remove("active")
        //         })
        //         ff_current_step.classList.add("active")
        //     } else {
        //         ff_current_step.classList.remove("active")
        //     }
        // }
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

    async function load_result() {

        let combination_to_search = steps_json.step1.value + ";" + steps_json.step3.value + ";" + steps_json.step4.value
        let result_find = false
        let finderResults = document.querySelectorAll('.js-step5-value')

        jsHeadResult.classList.remove("hide")
        jsHeadDefault.classList.add("hide")

        // console.log(combination_to_search)

        // mini: cadet mini
        // xl: force

        let url_fetch = "/pages/dealers?view=finder.json"

        const response = await fetch(url_fetch);
        const finder_res = await response.json();

        // console.log(finder_res)
        // console.log(JSON.stringify(finder_res)) 

        for (var combination of Object.keys(finder_res)) {

            console.log(combination_to_search) 
            console.log(combination) 

            if (combination == combination_to_search) {

                result_find = true

                var scelta1 = finder_res[combination].result1
                var scelta2 = finder_res[combination].result2

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


                if (steps_json.step2.value.includes("Based on your input provided")) {

                    document.querySelector(".js-no-result").classList.remove("hide")
                    document.querySelector(".js-finder-head-result p").classList.add("hide")
                    
                    finderResults[0].classList.add("hide")
                    finderResults[1].classList.add("hide")

                } else {

                    document.querySelector(".js-no-result").classList.add("hide")
                    document.querySelector(".js-finder-head-result p").classList.remove("hide")

                    const response_scelta1 = await fetch('/products/'+scelta1+'.js');
                    const response_scelta1_json = await response_scelta1.json();

                    console.log(response_scelta1_json)

                    result1 = sessionStorage.getItem("Step2_r1")
                    result2 = sessionStorage.getItem("Step2_r2")
                    no_result1 = true
                    no_result2 = true
                    res1_recalc = result1
                    res2_recalc = result2

                    response_scelta1_json.variants.forEach(variant => {

                        let size_check = variant.option1

                        if (size_check == result1) {
                            no_result1 = false
                            res1_recalc = result1
                        } else if (size_check == Number(result1)+1) {
                            no_result1 = false
                            res1_recalc = Number(result1)+1
                        } else if (size_check == Number(result1)-1) {
                            no_result1 = false
                            res1_recalc = Number(result1)-1
                        } else if (result1.includes("W")) {
                            if ( result1.includes("W") ) {
                                result1.replace("W", "")
                                if (size_check == Number(result1)+1+"W") {
                                    no_result1 = false
                                    res1_recalc = Number(result1)+1+"W"
                                } else if (size_check == Number(result1)-1+"W") {
                                    no_result1 = false
                                    res1_recalc = Number(result1)-1+"W"
                                }
                            }
                        }

                        if (size_check == result2) {
                            no_result2 = false
                            res2_recalc = result2
                        } else if (size_check == Number(result2)+1) {
                            no_result2 = false
                            res2_recalc = Number(result2)+1
                        } else if (size_check == Number(result2)-1) {
                            no_result2 = false
                            res2_recalc = Number(result2)-1
                        } else if (result2.includes("W")) {
                            if ( result2.includes("W") ) {
                                result2.replace("W", "")
                                if (size_check == Number(result2)+1+"W") {
                                    no_result2 = false
                                    res2_recalc = Number(result2)+1+"W"
                                } else if (size_check == Number(result2)-1+"W") {
                                    no_result2 = false
                                    res2_recalc = Number(result2)-1+"W"
                                }
                            }
                        }


                    });

                    if ((!no_result1) && (!no_result2)) {
                        steps_json.step2.value = "<a href='' class='result-size js-result-size--1'>"+res1_recalc+"</a><a href='' class='result-size js-result-size--2'>"+res2_recalc+"</a>"
                    } else if ((!no_result1) && (no_result2)) {
                        steps_json.step2.value = "<a href='' class='result-size js-result-size--1'>"+res1_recalc+"</a><a style='display:none' href='' class='result-size js-result-size--2'></a>"
                    } else if ((no_result1) && (!no_result2)) {
                        steps_json.step2.value = "<a style='display:none' href='' class='result-size js-result-size--1'></a><a href='' class='result-size js-result-size--2'>"+res2_recalc+"</a>"
                    } else {
                        steps_json.step2.value = "<a style='display:none' href='' class='result-size js-result-size--1'></a><a style='display:none' href='' class='result-size js-result-size--2'></a>"
                    }
    
                    finderResults[0].querySelector(".js-fs-result-img").setAttribute("src", response_scelta1_json.featured_image)
                    finderResults[0].querySelector(".js-fs-result-title").innerHTML = response_scelta1_json.title
                    finderResults[0].querySelector(".js-fs-result-size").innerHTML = steps_json.step2.value
                    finderResults[0].querySelector(".js-fs-result-link").setAttribute("href", response_scelta1_json.url)
                    finderResults[0].querySelector(".js-result-size--1").setAttribute("href", response_scelta1_json.url)
                    finderResults[0].querySelector(".js-result-size--2").setAttribute("href", response_scelta1_json.url)
    
    
                    const response_scelta2 = await fetch('/products/'+scelta2+'.js');
                    const response_scelta2_json = await response_scelta2.json();
    
                    finderResults[1].querySelector(".js-fs-result-img").setAttribute("src", response_scelta2_json.featured_image)
                    finderResults[1].querySelector(".js-fs-result-title").innerHTML = response_scelta2_json.title
                    finderResults[1].querySelector(".js-fs-result-size").innerHTML = steps_json.step2.value
                    finderResults[1].querySelector(".js-fs-result-link").setAttribute("href", response_scelta2_json.url)
                    finderResults[0].querySelector(".js-result-size--1").setAttribute("href", response_scelta1_json.url)
                    finderResults[0].querySelector(".js-result-size--2").setAttribute("href", response_scelta1_json.url)
    
                    
                    finderResults[0].classList.remove("hide")
                    if ((size_selected != "Mini") && (size_selected != "Extra Large")) {
                        finderResults[1].classList.remove("hide")
                    }
                }

                resultLoader.classList.add("hide")

            }



        }

        if (!result_find) {

            resultLoader.classList.add("hide")

            document.querySelector(".js-no-result").classList.remove("hide")
            document.querySelector(".js-finder-head-result p").classList.add("hide")
            
            finderResults[0].classList.add("hide")
            finderResults[1].classList.add("hide")

        }

    }

    function check_step_2() {

        if (sessionStorage.getItem("Step2") != "") {
            steps_json["step2"].status = true
            steps_json["step2"].value = sessionStorage.getItem("Step2")
        } else {
            steps_json["step2"].status = false
            steps_json["step2"].value = ""
        }
        finder_navigation_check()
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

            check_step_2()

        } else {
            // errore nello step corrente
            let error_current_step = document.querySelector(".finder-step[data-step='" + current_step + "']")

            error_current_step.classList.add("error")
            setTimeout(function () {
                error_current_step.classList.remove("error")
            }, 2000);
        }

        finder_arrows_check()

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
                    jsSteps[1].setAttribute("gender",cat)

                    // sistemo le oprions nello step 2 (mostro per gender)
                    let gender_options = document.querySelectorAll(".js-fsm-box-select-size option:not([gender='none'])")
                    gender_options.forEach(gender_option => {
                        let gender_attr = gender_option.getAttribute("gender")
                        if (gender_attr != cat) {
                            gender_option.classList.add("hide")
                        } else {
                            gender_option.classList.remove("hide")
                        }
                    })

                    finder_set_step("step1", true, cat)
                    finder_change_next("active")

                    // finder_navigation_check()

                })
            })
        }

        // STEP 2 - inside javascript section

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

                    // finder_navigation_check()

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

                    let clientX = 0

                    if (window.innerWidth < 769) {
                        clientX = e.changedTouches[0].pageX
                    } else {
                        clientX = e.clientX
                    }

                    newX = oldX - clientX; // to calculate how much we have moved
                    oldX = clientX; // store current value to use for next move
                    let pos = selector_pin.offsetLeft - newX

                    // if (window.innerWidth < 769) {
                    //     startX = e.changedTouches[0].pageX;
                    //     console.log(e.changedTouches[0].pageX)
                    // } 


                    console.log("clientX: "+clientX)
                    console.log("newX: "+newX)
                    console.log("pos: "+pos)

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

                    let val1 = ""
                    let val2 = ""

                    switch(true) {
                        case (riding_style_json["style-1"] < 3) :
                            val1 = "freestyle"
                            // if (steps_json.step4.value.includes("&&")) {
                            //     steps_json.step4.value = "freestyle".concat(steps_json.step4.value)
                            //     steps_json.step4.status = true
                            // } else {
                            //     steps_json.step4.value = "freestyle"
                            // }
                          break;
                          case ((3 <= riding_style_json["style-1"]) && (riding_style_json["style-1"] <= 7)) :
                            val1 = "all-mountain"
                            // if (steps_json.step4.value.includes("&&")) {
                            //     steps_json.step4.value = "all-mountain".concat(steps_json.step4.value)
                            //     steps_json.step4.status = true
                            // } else {
                            //     steps_json.step4.value = "all-mountain"
                            // }
                        break;
                        case (riding_style_json["style-1"] > 7) :
                            val1 = "freeride"
                            // if (steps_json.step4.value.includes("&&")) {
                            //     steps_json.step4.value = "freeride".concat(steps_json.step4.value)
                            //     steps_json.step4.status = true
                            // } else {
                            //     steps_json.step4.value = "freeride"
                            // }
                        break;

                    }

                    switch(true) {
                        case (riding_style_json["style-2"] < 3) :
                            val2 = "soft"
                            // steps_json.step4.value = steps_json.step4.value.concat("&&", "soft")
                            // if ((steps_json.step4.value.includes("freestyle")) || (steps_json.step4.value.includes("all-mountain")) || (steps_json.step4.value.includes("freeride"))) {
                            //     steps_json.step4.status = true
                            // }
                          break;
                        case ((3 <= riding_style_json["style-2"]) && (riding_style_json["style-2"] <= 7)) :
                            val2 = "medium"
                            // steps_json.step4.value = steps_json.step4.value.concat("&&", "medium")
                            // if ((steps_json.step4.value.includes("freestyle")) || (steps_json.step4.value.includes("all-mountain")) || (steps_json.step4.value.includes("freeride"))) {
                            //     steps_json.step4.status = true
                            // }
                        break;
                        case (riding_style_json["style-2"] > 7) :
                            val2 = "stiff"
                            // steps_json.step4.value = steps_json.step4.value.concat("&&", "stiff")
                            // if ((steps_json.step4.value.includes("freestyle")) || (steps_json.step4.value.includes("all-mountain")) || (steps_json.step4.value.includes("freeride"))) {
                            //     steps_json.step4.status = true
                            // }
                        break;
                    }

                    if (val1 && val2) {
                        steps_json.step4.value = val1 + "&&" + val2
                    }
                    console.log(riding_style_json["style-1"]+" "+val1)
                    console.log(riding_style_json["style-2"]+" "+val2)
                    console.log(steps_json.step4.value)

                    // if (riding_style_json["style-2"] < 3) {
                    //     steps_json.step4.value = "street-and-jibbing"
                    //     steps_json.step4.status = true
                    // }
                    // else if (riding_style_json["style-2"] > 7) {
                    //     steps_json.step4.value = "carving-boardercross"
                    //     steps_json.step4.status = true
                    // }
                    // else if (riding_style_json["style-1"] < 2 ) {
                    //     steps_json.step4.value = "freestyle-park"
                    //     steps_json.step4.status = true
                    // }
                    // else if (riding_style_json["style-1"] > 8) {
                    //     steps_json.step4.value = "freeride"
                    //     steps_json.step4.status = true
                    // }
                    // else if (riding_style_json["style-1"] == 5) {
                    //     steps_json.step4.value = "all-mountain"
                    //     steps_json.step4.status = true
                    // }
                    // else if ((riding_style_json["style-1"] >= 2) && (riding_style_json["style-1"] < 5 )) {
                    //     steps_json.step4.value = "all-mountain--freestyle"
                    //     steps_json.step4.status = true
                    // }
                    // else if ((riding_style_json["style-1"] > 5) && (riding_style_json["style-1"] <= 8)) {
                    //     steps_json.step4.value = "all-mountain--freeride"
                    //     steps_json.step4.status = true
                    // }
                    // else {
                    //     steps_json.step4.value = "all-mountain2"
                    //     steps_json.step4.status = true
                    // }

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



                }

                // when mouse down on element attach mouse move and mouse up for document
                // so that if mouse goes outside element still drags
                function dragMouseDown(e) {
                    e = e || window.event;
                    e.preventDefault();
                    oldX = e.clientX; // store current value to use for mouse move calculation
                    document.onmouseup = closeDragElement;
                    document.onmousemove = elementDrag;

                    document.ontouchend = closeDragElement; // mob
                    document.ontouchmove = elementDrag; // mob

                    // document.addEventListener("touchend", function(){
                    //     console.log("touchend")
                    //     closeDragElement();
                    //  });
                    //  document.addEventListener("touchmove", function(){
                    //     console.log("touchmove")
                    //     elementDrag();
                    //  });
                }

                selector_pin.onmousedown = dragMouseDown;
                selector_pin.ontouchstart = dragMouseDown; // mob

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


    // step4 info boxes
    let fs_styles = document.querySelectorAll(".fs-style")

    fs_styles.forEach(fs_style => {
        
        let info_style = fs_style.querySelector(".info-style")
        let modal_style = fs_style.querySelector(".modal-fs-style")

        info_style.addEventListener("click", function() {
    
            if (modal_style.classList.contains("hide")) {
                modal_style.classList.remove("hide")
            } else {
                modal_style.classList.add("hide")
            }
            document.addEventListener('click', e => {
                if (!modal_style.contains(e.target) && !info_style.contains(e.target)) {
                    modal_style.classList.add("hide")
                }
            });
        })
    });

})()