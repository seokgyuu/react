import React, { useState } from "react";

const Cal = () => {
    // 시급(hourlyWage), 근무 시간(hourWorked), 총 급여 상태(setHourWage)
    const [hourlyWage, setHourlyWage] = useState(0);
    const [hoursWorked, setHoursWorked] = useState(0);
    const [totalPay, setTotalPay] = useState(0);

    // 총 급여 계산 함수
    const calculatePay = () => {
        setTotalPay(hourlyWage * hoursWorked); // 시급 * 근무 시간으로 총 급여 계산
    };

    return (
        <section id="Cal">
            <h1>최저 시급 계산기</h1>
            <div>
                <label>
                    시급:
                    <input
                        type="number"
                        value={hourlyWage}
                        onChange={(e) => setHourlyWage(Number(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <label>
                    근무 시간:
                    <input
                        type="number"
                        value={hoursWorked}
                        onChange={(e) => setHoursWorked(Number(e.target.value))}
                    />
                </label>
            </div>
            <button onClick={calculatePay}>계산하기</button>
            <h2>총 급여: {totalPay} 원</h2>
        </section>
    );
};

export default Cal;
