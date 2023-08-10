import { renderHook, act } from "@testing-library/react";
import useStepper from "../hooks/useStepper";

test("increment from 0 to 1", () => {
    const { result } = renderHook(useStepper);
    act(() => result.current.setStep(0));
    act(()=> result.current.increment());
    expect(1).toBe(result.current.step);
});

test("decrement from 1 to 0", () => {
    const { result } = renderHook(useStepper);
    act(() => result.current.setStep(1));
    act(() => result.current.decrement());
    expect(0).toBe(result.current.step);
});

test("cannot go below 0", () => {
    const { result } = renderHook(useStepper);
    act(() => result.current.setStep(0));
    act(() => result.current.decrement());
    expect(0).toBe(result.current.step);
})

test("cannot go above 2", () => {
    const { result } = renderHook(useStepper);
    act(() => result.current.setStep(2));
    act(() => result.current.increment());
    expect(2).toBe(result.current.step);
})

