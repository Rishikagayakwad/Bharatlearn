import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_QUIZZES } from '../data/mockData';
import {
  X,
  Sparkles,
  CheckCircle2,
  XCircle,
  Award,
  ArrowRight,
  RotateCcw,
  Trophy,
  Brain
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuizModal: React.FC = () => {
  const { activeQuiz, closeQuizModal, addXP, showToast } = useApp();

  const quiz = ALL_QUIZZES.find((q) => q.id === activeQuiz) || ALL_QUIZZES[0];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!activeQuiz) return null;

  const currentQ = quiz.questions[currentQuestionIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsCompleted(true);
      const earnedXP = Math.round((score / quiz.questions.length) * quiz.xpReward);
      addXP(earnedXP, `Completed ${quiz.title}`);
      
      // Trigger festive celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Safe fallback
      }
      showToast(`Quiz completed! You earned +${earnedXP} XP!`, 'celebrate');
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div
      id="quiz-modal-container"
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150"
      onClick={closeQuizModal}
    >
      <div
        className="w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
              Interactive Concept Challenge
            </span>
            <h3 className="text-lg font-bold text-white mt-1">{quiz.title}</h3>
          </div>
          <button
            onClick={closeQuizModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isCompleted ? (
          /* Quiz Questions Flow */
          <div className="space-y-6">
            {/* Question Counter & Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>
                  Question {currentQuestionIndex + 1} of {quiz.questions.length}
                </span>
                <span className="text-amber-400 font-semibold">Reward: +{quiz.xpReward} XP</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-amber-400 transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%`
                  }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <p className="text-sm sm:text-base font-bold text-slate-100 leading-snug">
                {currentQ.question}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-2.5">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctAnswer;

                let optionStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';
                if (isSelected && !isAnswerSubmitted) {
                  optionStyle = 'bg-sky-500/20 border-sky-400 text-sky-200 font-bold';
                } else if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-rose-500/20 border-rose-400 text-rose-200 font-bold';
                  }
                }

                return (
                  <button
                    key={option}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm flex items-center justify-between transition-all cursor-pointer ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-bold text-slate-400">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </div>

                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Conceptual Explanation Box */}
            {isAnswerSubmitted && (
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5 animate-in fade-in duration-200">
                <span className="text-[10px] uppercase font-bold text-amber-400 flex items-center gap-1">
                  <Brain className="w-3.5 h-3.5" /> Conceptual Explanation
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-end gap-2">
              {!isAnswerSubmitted ? (
                <button
                  disabled={selectedOption === null}
                  onClick={handleSubmitAnswer}
                  className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-40 text-slate-950 font-bold text-xs cursor-pointer"
                >
                  Verify Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-lg"
                >
                  {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question →' : 'See Results 🏆'}
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Completion Screen */
          <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 to-emerald-400 p-1 mx-auto shadow-xl">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                <Trophy className="w-10 h-10 text-amber-400" />
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="text-2xl font-black text-white font-display">Challenge Mastered!</h4>
              <p className="text-xs text-slate-400">
                You scored <strong>{score} out of {quiz.questions.length}</strong> correct
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-sm">
              <Award className="w-4 h-4" />
              <span>+{Math.round((score / quiz.questions.length) * quiz.xpReward)} Knowledge XP Awarded</span>
            </div>

            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                onClick={handleRestart}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Retake
              </button>
              <button
                onClick={closeQuizModal}
                className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold"
              >
                Continue Learning →
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
