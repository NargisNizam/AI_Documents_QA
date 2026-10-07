def evaluate_answer(question, answer, sources):
    """
    Basic evaluation of the RAG system response.
    """

    evaluation = {
        "question": question,
        "answer_generated": bool(answer and answer.strip()),
        "sources_found": len(sources) if sources else 0,
        "has_source": bool(sources),
    }

    if not answer or not answer.strip():
        evaluation["status"] = "Failed"
    elif not sources:
        evaluation["status"] = "Needs Review"
    else:
        evaluation["status"] = "Passed"

    return evaluation


if __name__ == "__main__":
    # Example evaluation
    question = "What is artificial intelligence?"
    answer = "Artificial intelligence is a field of computer science."
    sources = ["artificial_intelligence.pdf"]

    result = evaluate_answer(question, answer, sources)

    print("Evaluation Result")
    print("------------------")
    print(f"Question: {result['question']}")
    print(f"Answer Generated: {result['answer_generated']}")
    print(f"Sources Found: {result['sources_found']}")
    print(f"Has Source: {result['has_source']}")
    print(f"Status: {result['status']}")