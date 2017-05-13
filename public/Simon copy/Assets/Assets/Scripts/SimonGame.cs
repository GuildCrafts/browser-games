using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SimonGame : MonoBehaviour {

	[SerializeField]
	Simon simonPlayer;
	[SerializeField]
	Player player;
	[SerializeField]
	List<Button> button = new List<Button>();

	//If this is 0 then it's simons turn, if it's one then it's the players turn
	int turn = 0;

	public int numberOfPresses = 2;

	// Use this for initialization
	void Start () {
		foreach (Button b in buttons)
		{
				b.buttonPressed += HandleButtonPressed;
		}

		simonPlayer.TakeTurn(numberOfPresses);
		turnTaken = true;
	}

	int playerButtonPress = 0;
	private void HandleButtonPressed(Button obj)
	{
		if (turn == 0)
			simonsTurn.Add(obj.name);

		if (turn == 1)
		{
			if (playerButtonPress == numberOfPresses - 1)
			{
				Debug.Log("Great Job! You successfully repeated Simons pattern!");
				numberOfPresses++;
				Invoke("SwitchTurn", 2f);
				return;
			}

			if (simonsTurn[playerButtonPress].Equals(obj.name))
			{
				Debug.Log("You hit the right button!");
			}
			else
			{
				Debug.Log("You hit the wrong button! GAME OVER!");
				numberOfPresses = 2;
				Invoke("SwitchTurn", 2f);
				return;
			}
			playerButtonPress++;
		}
	}

	void SwitchTurn()
	{
		turn = 0;
		player.isOurTurn = false;
		turnTaken = false;
		playerButtonPress = 0;
		simonsTurn.Clear();
	}

	List<string> simonsTurn = new List<string>();
	bool turnTaken = false;

	// Update is called once per frame
	void Update () {
		//It's Simons turn
				if (turn == 0 && !turnTaken)
				{
					simonPlayer.TakeTurn(numberOfPresses);
					turnTaken = true;
				}
				else if (turn == 0 && turnTaken)
				{
					if (simonsTurn.Count == numberOfPresses)
					{
						Debug.Log("<color=green>SimonGame here! Simon has finished his turn: " +  simonsSelection() + ", now it's the Players turn</color>");
						player.isOurTurn = true;
						turn = 1;
					}
				}
			//It's Players Turn
				if (turn == 1)
				{

				}

	}

	private string simonsSelection()
	{
		string simonsSelectionString = "";
		foreach (string s in simonsTurn)
		{
			simonsSelectionString += s + ", ";
		}

		return simonsSelectionString;
	}
}
