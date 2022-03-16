enum direction {
    foword,
    right,
    left,
    right_circle,
    left_circle,
    back,
    stop
}

//% color="#3943c6" block="Eureka motor" icon="\uf1b9"
namespace eureka_motor {
    //% color="#3943c6" weight=70　blockId=moving1
    //% block="|%sinkou_houkou|へ |%time_sec|秒間進む 出力|%Power|" group="基本の動き"
    //% Power.min=0 Power.max=255
    export function car_derection_time(sinkou_houkou: direction, time_sec: number, Power: number): void {
        switch (sinkou_houkou) {
            case direction.foword:
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Power);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, Power);
                basic.pause(time_sec * 1000);
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0);
                basic.pause(100);
                break;


            case direction.left:
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, Power);
                basic.pause(time_sec * 1000);
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0);
                basic.pause(100);
                break;
            case direction.right:
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Power);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0);
                basic.pause(time_sec * 1000);
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0);
                basic.pause(100);
                break;
            case direction.right_circle:
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Power);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0);
                basic.pause(time_sec * 1000);
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0);
                basic.pause(100);
                break;
            case direction.left_circle:
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Power);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0);
                basic.pause(time_sec * 1000);
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0);
                basic.pause(100);
                break;
            case direction.back:
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Power);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0);
                basic.pause(time_sec * 1000);
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0);
                basic.pause(100);
                break;
            case direction.stop:
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0);
                basic.pause(100);
                break;
        }
    }
    //% color="#3943c6" weight=70　blockId=moving2
    //% block="|%sinkou_houkou|へ 出力|%Power|" group="基本の動き"
    //% Power.min=0 Power.max=255
    export function car_derection(sinkou_houkou: direction, Power: number): void {
        switch (sinkou_houkou) {
            case direction.foword:
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Power);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, Power);
                break;
            case direction.left:
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, Power);
                break;
            case direction.right:
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Power);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0);
                break;
            case direction.right_circle:
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Power);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0);
                break;
            case direction.left_circle:
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Power);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0);
                break;
            case direction.back:
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Power);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0);
                break;
            case direction.stop:
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Power);
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, Power);
                basic.pause(100);
                break;
        }
    }




}
