using System;
﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Simon : MonoBehaviour {

	[SerializeField]
	bool debugMode = false;

	[SerializeField]
	List<Button> buttons = new List<Button>();

	[SerializeField]
	int numberOfChoices;


	List<int> choices = new List<int>();
	int randomNumber;

	// Use this for initialization
	void Start () {
	}

	// Update is called once per frame
	void Update () {
	}

	public List<int> TakeTurn(int numberOfChoices)
	{
		choices = new List<int>();

		for (int i = 0; i < numberOfChoices; i++)
			choices.Add(UnityEngine.Random.Range(0, 4));
		if (debugMode)
			LogChoices(choices, numberOfChoices);

		StartCoroutine(PressButtons());
		return choices;
	}

	IEnumerator PressButtons()
	{
		for (int i = 0; i < choices.Count; i++)
		{
			buttons[choices[i]].Activate();
			yield return new WaitForSeconds(1f);
		}
	}

	private void LogChoices (List<int> choices, int num)
	{
		string outputString = choices[0].ToString();
		for (int i = 1; i < num; i++)
			outputString += ", " + choices[i].ToString();
		Debug.Log(outputString);
	}
}
