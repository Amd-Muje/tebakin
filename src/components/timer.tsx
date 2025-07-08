import { TimerIcon } from "lucide-react";


interface TimerProps {
    timeLeft: number;
}

export default function Timer({timeLeft}: TimerProps) {
	return (
		<div className="flex justify-center items-center space-x-2 text-2xl font-bold text-gray-700 mb-8">
			Timer
			<TimerIcon className="w-6 h-6" />
            <span>{timeLeft}s</span>
		</div>
	);
}
